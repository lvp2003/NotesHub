import React, { useState } from "react";
const NotesGrid = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [query, setQuery] = useState("");
  const notes = [
    {
      id: 1,
      title: "Data Structures Notes",
      subject: "DSA",
      uploadedBy: "Alice",
    },
    { id: 2, title: "Operating Systems", subject: "OS", uploadedBy: "Bob" },
    {
      id: 3,
      title: "Database Management",
      subject: "DBMS",
      uploadedBy: "Charlie",
    },
    {
      id: 1,
      title: "Data Structures Notes",
      subject: "DSA",
      uploadedBy: "Alice",
    },
    { id: 2, title: "Operating Systems", subject: "OS", uploadedBy: "Bob" },
    {
      id: 3,
      title: "Database Management",
      subject: "DBMS",
      uploadedBy: "Charlie",
    },
    {
      id: 1,
      title: "Data Structures Notes",
      subject: "DSA",
      uploadedBy: "Alice",
    },
    { id: 2, title: "Operating Systems", subject: "OS", uploadedBy: "Bob" },
    {
      id: 3,
      title: "Database Management",
      subject: "DBMS",
      uploadedBy: "Charlie",
    },
    {
      id: 1,
      title: "Data Structures Notes",
      subject: "DSA",
      uploadedBy: "Alice",
    },
    { id: 2, title: "Operating Systems", subject: "OS", uploadedBy: "Bob" },
    {
      id: 3,
      title: "Database Management",
      subject: "DBMS",
      uploadedBy: "Charlie",
    },
  ];
  const filterednotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(query.toLowerCase()) ||
      note.subject.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Browse Notes</h2>
        <input
          type="text"
          placeholder="Search notes by title or subject"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full sm:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
          {filterednotes.length > 0 ? (
            filterednotes.map((note) => (
              <div
                key={note.id}
                className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2 text-white">
                  {note.title}
                </h3>
                <p className="text-gray-600 font-semibold text-white">
                  📘 {note.subject}
                </p>
                <p className="text-gray-500 text-sm text-white">
                  Uploaded by {note.uploadedBy}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Download
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No notes found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default NotesGrid;
