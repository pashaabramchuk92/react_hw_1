import { useState, useRef, useEffect } from 'react';

export const TodoItem = ({ title, id, isComplete, deleteNote, setComplete, editNote }) => {
  const editRef = useRef();
  const [value, setValue] = useState(title);
  const [editing, setEditing] = useState(false);
  const completeClassName = isComplete ? 'completed' : '';
  const editClassName = editing ? 'editing' : '';
  useEffect(() => {
    editRef.current.focus();
  }, [editing]);

  return (
    <li className={`${completeClassName} ${editClassName}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={isComplete}
          onChange = {(e) => setComplete(id, e.target.checked)}
        />
        <label 
          onDoubleClick = {() => {
            if(!isComplete) setEditing(true);
          }}
        >{title}</label>
        <button type='button' className="destroy"
          onClick ={() => deleteNote(id)}
        ></button>
      </div>
      <input
        ref={editRef}
        type="text"
        className='edit'
        value={value}
        onBlur = {() => {
          setEditing(false);
          editNote(id, value);
        }}
        onChange = {(e) => setValue(e.target.value)}
      />
    </li>
  );
}
