import React, { useState } from "react";

const BrowseNotes = () => {
  const [search, setSearch] = useState("");
  const [notes] = useState([
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
  ]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Browse Notes</h2>
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by title or subject..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 w-1/2 rounded-lg shadow-md"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5">
        {filteredNotes.length > 0 ? (
          filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-gray-900 shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold mb-2 text-white">
                {note.title}
              </h3>
              <p className="text-gray-300 font-semibold"> {note.subject}</p>
              <p className="text-gray-400 text-sm">
                Uploaded by {note.uploadedBy}
              </p>

              <a
                href={note.fileUrl}
                download
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Download
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No notes found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseNotes;
