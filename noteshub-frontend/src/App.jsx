import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NotesGrid from "./components/NotesGrid";
import UploadPage from "./components/UploadPage"; // ✅ Adjusted path

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <NotesGrid />
            </>
          }
        />
        <Route path="/uploads" element={<UploadPage />} />
      </Routes>
    </Router>
  );
};

export default App;
