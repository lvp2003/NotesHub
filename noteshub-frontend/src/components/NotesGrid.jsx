import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

const NotesGrid = () => {
  const [query, setQuery] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchingNotes = async () => {
      try {
        setLoading(true);
        const snapshot = await getDocs(collection(db, "notes"));
        const notesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(notesData);
      } catch (error) {
        console.log("Error fetching notes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchingNotes();
  }, []);
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.subject.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Browse Notes</h2>
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search notes by title or subject"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {loading ? (
          <p className="text-gray-500 text-center">Loading notes...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.length > 0 ? (
              filteredNotes.map((note) => (
                <div
                  key={note.id}
                  className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                  <p className="text-gray-600 font-semibold">
                    📘 {note.subject}
                  </p>
                  {note.uploadedBy && (
                    <p className="text-gray-500 text-sm">
                      Uploaded by {note.uploadedBy}
                    </p>
                  )}
                  <div className="mt-4 flex space-x-4">
                    <a
                      href={note.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Open
                    </a>
                    <a
                      href={note.fileUrl}
                      download
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">
                No notes found.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default NotesGrid;
