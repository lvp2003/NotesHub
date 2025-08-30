import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import NotesGrid from "./components/NotesGrid";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <SearchBar></SearchBar>
      <NotesGrid></NotesGrid>
    </>
  );
};

export default App;
