import React from "react";

const NotesGrid = () => {
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
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Browse Notes</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {note.title}
              </h3>
              <p className="text-gray-600 text-white">📘 {note.subject}</p>
              <p className="text-gray-500 text-sm">
                Uploaded by {note.uploadedBy}
              </p>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotesGrid;
