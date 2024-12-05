import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";
import myNotes from "./notes.js";
import Input from "./components/Input.jsx";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header />
      <Input />
      <Footer />
    </>
  );
}

export default App;
