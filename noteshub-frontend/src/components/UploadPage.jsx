import React, { useState } from "react";

const UploadPage = () => {
  const [formdata, setFormdata] = useState({
    title: "",
    subject: "",
    description: "",
    file: null,
  });
  const handleChage = (e) => {
    const { name, value, files } = e.target;
    setFormdata({
      ...formdata,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    alert("Upload submitted! (Backend integration pending 🚀)");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6text-center text-indigo-800">
          Upload your notes
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Tilte
            </label>
            <input
              type="text"
              name="title"
              required
              onChange={handleChage}
              value={formdata.title}
              placeholder="Enter notes title"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              subject
            </label>
            <select
              name="subject"
              value={formdata.subject}
              required
              onChange={handleChage}
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            >
              <option value="">Select subject</option>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="history">History</option>
              <option value="programming">Programming</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formdata.description}
              required
              onChange={handleChage}
              placeholder="Description about the notes(short)"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              rows={4}
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Upload File
            </label>
            <input
              type="file"
              name="file"
              accept="application/pdf"
              onChange={handleChage}
              required
              className="w-full border border-gray-300 p-2 rounded-lg cursor-pointer"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
