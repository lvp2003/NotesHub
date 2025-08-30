import React from "react";

const NotesGrid = () => {
  const sampleNotes = [
    {
      title: "Math - Calculus",
      subject: "Math",
      author: "Alice",
      file: "#",
    },
    {
      title: "Physics - Mechanics",
      subject: "Physics",
      author: "Bob",
      file: "#",
    },
    {
      title: "Computer Networks",
      subject: "CS",
      author: "Charlie",
      file: "#",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 p-10">
      {sampleNotes.map((notes, i) => (
        <div
          key={i}
          className="border rounded-lg shadow p-4 bg-black text-white"
        >
          <h3 className="text-lg font-bold">{notes.title}</h3>
          <p className="text-white font-semibold">
            {notes.subject} * {notes.author}
          </p>
          <a
            href={notes.file}
            className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Download
          </a>
        </div>
      ))}
    </div>
  );
};

export default NotesGrid;
