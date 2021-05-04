import { useState } from 'react';

export const InputTodo = ({ addNote }) => {
  const [value, setValue] = useState('');

  return (
    <input 
      className="new-todo"
      placeholder="What needs to be done?"
      value = {value}
      onChange = {(e) => setValue(e.target.value)}
      onKeyDown = {(e) => {
        if(e.key === 'Enter') {
          if(e.target.value.trim()) {
            addNote(e.target.value);
          }
          setValue('');
        }
      }}
    />
  );
}
