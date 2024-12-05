function Note(props) {
  return (
    <div className="note-container" key={props.title}>
      <h2 className="noteHeading">{props.title}</h2>
      <p className="noteContent">{props.content} </p>
    </div>
  );
}

export default Note;
