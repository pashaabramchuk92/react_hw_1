import { useState } from 'react';
import "./styles.css";
import { InputTodo } from "./components/InputTodo/InputTodo";
import { ListTodos } from "./components/ListTodos/ListTodos";
import { Footer } from "./components/Footer/Footer";
import { ToggleTodos } from "./components/ToggleTodos/ToggleTodos";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('all');

  const addNote = (title) => {
    const note = {
      title,
      id: Date.now(),
      isComplete: false
    }

    setNotes((notes) => [note, ...notes]);
  }

  const deleteNote = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  }

  const deleteAllNotes = (completed) => {
    setNotes(notes.filter((note) => note.isComplete === completed));
  }

  const editNote = (id, title) => {
    setNotes((notes) => notes.map((note) => {
      if(note.id === id) {
        return {
          ...note, 
          title
        };
      }

      return note;
    }));
  }

  const activeNoteCount = notes.reduce((count, note) => {
    if(!note.isComplete) {
      count++;
    }
    return count;
  }, 0);

  const completedNotesCount = notes.reduce((count, note) => {
    if (note.isComplete) {
      count++;
    }
    return count;
  }, 0);

  // const hasCompleted = activeNoteCount < notes.length;

  const setComplete = (id, isComplete) => {
    setNotes((notes) => notes.map((note) => {
      if(note.id === id) {
        note.isComplete = isComplete;
      }

      return note;
    }));
  };

  const setAllComplete = (completed) => {
    setNotes((notes) =>
      notes.map((note) => {
        note.isComplete = completed;
        return note;
      })
    );
  }

  const isAllComplete = notes.length === completedNotesCount;

  const filterNotes = notes.filter((note) => {
    if(filter === 'all') {
      return true;
    }
    if(filter === 'active') {
      return !note.isComplete;
    }
    if(filter === 'completed') {
      return note.isComplete;
    }
  });

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <InputTodo
          addNote = {addNote}
        />
      </header>
      <section className="main">
        {notes.length > 0 && (
          <ToggleTodos 
            setAllComplete = {setAllComplete}
            isAllComplete = {isAllComplete}
          />
        )}
        <ListTodos 
          data = {filterNotes}
          deleteNote = {deleteNote}
          setComplete = {setComplete}
          editNote = {editNote}
        />
      </section>
      {notes.length > 0 && (
        <Footer 
          data = {notes}
          activeCount = {activeNoteCount}
          hasCompleted = {completedNotesCount > 0}
          filter = {filter}
          setFilter = {setFilter}
          deleteAllNotes = {deleteAllNotes}
        />
      )}
    </section>
  );
}

export default App;
