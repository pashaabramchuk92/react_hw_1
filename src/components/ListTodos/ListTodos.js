import { TodoItem } from "../TodoItem/TodoItem";

export const ListTodos = ({ data, deleteNote, setComplete, editNote }) => {
  return (
    <ul className="todo-list">
      {data.map(note => {
        return (
          <TodoItem
            key = {note.id}
            id = {note.id}
            title = {note.title}
            isComplete = {note.isComplete}
            deleteNote = {deleteNote}
            setComplete = {setComplete}
            editNote = {editNote}
          />
        )
      })}
    </ul>
  );
}
