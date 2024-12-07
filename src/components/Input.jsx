import React, { useState } from "react";
import Note from "./Note";
function Input(props) {
  const [titlePHolder, setTitlePHolder] = useState("Title");
  const [contentPHolder, setContentPHolder] = useState("Note goes here");
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const [notes, setNotes] = useState([]);
  function handleTitleChange(e) {
    e.preventDefault();
    const { value, name } = e.target;
    setTitleText(value);
  }
  function handleContentChange(e) {
    e.preventDefault();
    const { value, name } = e.target;

    setContentText(value);
  }

  function AddNotes(e) {
    e.preventDefault();

    const newNote = {
      id: titleText,
      title: titleText,
      content: contentText,
    };
    if (newNote.title === "") {
      setTitlePHolder("Enter Title For Note");
      return;
    }
    if (newNote.content === "") {
      setContentPHolder("Enter Content For Note");
      return;
    }
    let isNotUniqueTitle;
    if (notes.length != 0) {
      isNotUniqueTitle = notes.some((note) => note.title === newNote.title);
    }

    if (isNotUniqueTitle) {
      isNotUniqueTitle = false;

      setTitleText("");
      setTitlePHolder("Title must Be Unique");
      return;
    }

    setNotes((prevValue) => {
      return [...prevValue, newNote];
    });
    setTitleText("");
    setContentText("");
    setTitlePHolder("Title");
    setContentPHolder("Note Goes Here...");
  }
  function deleteFn(e) {
    const { target } = e;
    setNotes((prevValue) => {
      const filteredNewNotes = prevValue.filter((oldNote) => {
        return oldNote.title !== target.id;
      });
      return filteredNewNotes;
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
            placeholder={titlePHolder}
            value={titleText}
            onChange={handleTitleChange}
          />{" "}
          <br />
          <textarea
            type="text"
            name="content"
            id="input-content"
            onChange={handleContentChange}
            value={contentText}
            placeholder={contentPHolder}
          ></textarea>
          <button id="addNoteBtn" onClick={AddNotes}>
            Add Note
          </button>
        </form>
      </section>
      {notes.map((note) => {
        return (
          <Note
            title={note.title}
            content={note.content}
            deleteFunction={deleteFn}
          />
        );
      })}
    </>
  );
}

export default Input;
