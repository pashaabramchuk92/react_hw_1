import { useEffect, useState } from 'react';

export const ToggleTodos = ({ setAllComplete, isAllComplete }) => {
  const [checked, setChecked] = useState(isAllComplete);

  useEffect(() => {
    setAllComplete(checked);
  }, [checked]);

  return (
    <>
      <input
        checked={checked}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        onChange = {(e) => setChecked(e.target.checked)}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
}
