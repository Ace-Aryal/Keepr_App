import React, { useState, useEffect } from "react";
import Note from "./Note";
function Input(props) {
  const [titlePHolder, setTitlePHolder] = useState("Title");
  const [contentPHolder, setContentPHolder] = useState("Note goes here");
  const [titleText, setTitleText] = useState("");
  const [contentText, setContentText] = useState("");
  const savedNotes = JSON.parse(localStorage.getItem("noteData")) || [];
  const [notes, setNotes] = useState(savedNotes);

  useEffect(() => {
    //for local storage
    localStorage.setItem(`noteData`, JSON.stringify(notes));
  }, [notes]);

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
    // create new notes using useState
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
      //edge cases
      isNotUniqueTitle = notes.some((note) => note.title === newNote.title);
    }

    if (isNotUniqueTitle) {
      isNotUniqueTitle = false;

      setTitleText("");
      setTitlePHolder("Title must Be Unique");
      return;
    }

    setNotes((prevValue) => {
      // if the new note is unique , adding it to notes array
      return [...prevValue, newNote];
    });
    setTitleText("");
    setContentText("");
    setTitlePHolder("Title");
    setContentPHolder("Note Goes Here...");
  }
  function deleteFn(e) {
    // deletes note
    const { target } = e;
    setNotes((prevValue) => {
      const filteredNewNotes = prevValue.filter((oldNote) => {
        return oldNote.title !== target.id; // filter out the clicked note
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
          // mapping over notes array to render all notes
          <Note
            title={note.title}
            content={note.content}
            deleteFunction={deleteFn} // passing delete function to vhild component
          />
        );
      })}
    </>
  );
}

export default Input;
