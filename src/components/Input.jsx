import React from "react";

function Input(props) {
  const [notes, setNotes] = useState([]);
  function AddNotes() {
    let newNote = {
      id: notes.length,
      title: ,
    };
    setNotes((currentNotes) => {
      return currentNotes.push(newNote);
    });
  }

  return (
    <section className="top">
      <form className="input-container">
        <input type="text" name="title" id="input-title" placeholder=" Title" />{" "}
        <br />
        <textarea
          type="text"
          name="content"
          id="input-content"
          placeholder="Add a note... "
        ></textarea>
        <button>Add Note</button>
      </form>
    </section>
  );
}

export default Input;
