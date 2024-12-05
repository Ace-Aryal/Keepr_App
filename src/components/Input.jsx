import React, { useState } from "react";
import Note from "./Note";
function Input(props) {
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const [notes, setNotes] = useState([
    {
      title: "hi",
      content: "i love you",
    },
  ]);
  function handleChange(e) {
    e.preventDefault();
    const { value, name } = e.target;
    name === "title" ? setTitleText(value) : setContentText(value);
  }

  function AddNotes(e) {
    e.preventDefault();

    const newNote = {
      id: titleText,
      title: titleText,
      content: contentText,
    };

    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
  }
  return (
    <>
      <section className="top">
        <form className="input-container">
          <input
            type="text"
            name="title"
            id="input-title"
            placeholder=" Title"
            value={titleText}
            onChange={handleChange}
          />{" "}
          <br />
          <textarea
            type="text"
            name="content"
            id="input-content"
            onChange={handleChange}
            value={contentText}
            placeholder="Add a note... "
          ></textarea>
          <button onClick={AddNotes}>Add Note</button>
        </form>
      </section>
      {notes.map((note) => {
        <Note title={note.title} content={note.content} />;
      })}
    </>
  );
}

export default Input;
