import React, { useState } from "react";

const NotesGrid = () => {
  const [query, setQuery] = useState("");

  const notes = [
    {
      id: 1,
      title: "Data Structures Notes",
      subject: "DSA",
      uploadedBy: "Alice",
      fileUrl: "/sample1.pdf",
    },
    {
      id: 2,
      title: "Operating Systems",
      subject: "OS",
      uploadedBy: "Bob",
      fileUrl: "/sample2.pdf",
    },
    {
      id: 3,
      title: "Database Management",
      subject: "DBMS",
      uploadedBy: "Charlie",
      fileUrl: "/sample3.pdf",
    },
    {
      id: 4,
      title: "Computer Networks",
      subject: "CN",
      uploadedBy: "David",
      fileUrl: "/sample4.pdf",
    },
    {
      id: 5,
      title: "Machine Learning Basics",
      subject: "AI",
      uploadedBy: "Eva",
      fileUrl: "/sample5.pdf",
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
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search notes by title or subject"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filterednotes.length > 0 ? (
            filterednotes.map((note) => (
              <div
                key={note.id}
                className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
              >
                <h3 className="text-xl font-bold mb-2">{note.title}</h3>
                <p className="text-gray-600 font-semibold">📘 {note.subject}</p>
                <p className="text-gray-500 text-sm">
                  Uploaded by {note.uploadedBy}
                </p>

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
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-green-700"
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
      </div>
    </section>
  );
};

export default NotesGrid;
