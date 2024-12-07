function Note(props) {
  return (
    <div className="note-container" key={props.title}>
      <input type="text" className="noteHeading" value={props.title} readOnly />
      <textarea
        className="noteContent"
        value={props.content}
        readOnly
      ></textarea>
      <button
        id={props.title}
        class="deleteNoteBtn"
        title="delete button"
        onClick={props.deleteFunction}
      >
        Delete Note
      </button>
    </div>
  );
}

export default Note;
