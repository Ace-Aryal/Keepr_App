import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import myNotes from "./notes.js";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {myNotes.map((note) => {
        return <Note key={note.id} title={note.title} content={note.content} />;
      })}
      <Footer />
    </>
  );
}

export default App;
