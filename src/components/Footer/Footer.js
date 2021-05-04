export const Footer = ({ data, activeCount, hasCompleted, filter, setFilter, deleteAllNotes }) => (
  <footer className="footer">
    <span className="todo-count">
      <strong>{activeCount}</strong> items left
    </span>
    <ul className="filters">
      <li>
        <a 
          href="/"
          className={filter === 'all' ? 'selected' : ''}
          onClick = {(e) => {
            e.preventDefault();
            setFilter('all');
          }}
        >
          All
        </a>
      </li>
      <li>
        <a
          href="/active"
          className={filter === 'active' ? 'selected' : ''}
          onClick = {(e) => {
            e.preventDefault();
            setFilter('active');
          }}
        >Active</a>
      </li>
      <li>
        <a
          href="/completed"
          className={filter === 'completed' ? 'selected' : ''}
          onClick = {(e) => {
            e.preventDefault();
            setFilter('completed');
          }}
        >Completed</a>
      </li>
    </ul>
    {hasCompleted && (
      <button
        className="clear-completed"
        onClick = {() => deleteAllNotes(data.isComplete === true)}
      >Clear completed</button>
    )}
  </footer>
);
