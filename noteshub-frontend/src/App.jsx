import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import NotesGrid from "./components/NotesGrid";
import PageNotFound from "./components/PageNotFound";
// import UploadPage from "./components/UploadPage";
// import BrowseNotes from "./components/BrowseNotes";
// import PdfViewer from "./components/PdfViewer";

const App = () => {
  const UploadPage = lazy(() => import("./components/UploadPage"));
  const BrowseNotes = lazy(() => import("./components/BrowseNotes"));
  const PdfViewer = lazy(() => import("./components/PdfViewer"));
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div className="p-4 text-center">Loading....</div>}>
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
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
