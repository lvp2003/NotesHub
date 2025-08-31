import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NotesGrid from "./components/NotesGrid";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <NotesGrid></NotesGrid>
    </>
  );
};

export default App;
