import React, { useState, useRef } from "react";
import { storage, db } from "../firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
const UploadPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    subject: "",
    description: "",
    file: null,
  });
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (!formData.file) return alert("Please select a file!");
      // upload file to firebase storage
      const fileReference = ref(
        storage,
        `notes/${Date.now()}-${formData.file.name}`
      );
      await uploadBytes(fileReference, formData.file);
      // get file download url
      const downloadURL = await getDownloadURL(fileReference);
      // save metadata in firestore
      await addDoc(collection(db, "notes"), {
        title: formData.title,
        subject: formData.subject,
        description: formData.description,
        fileUrl: downloadURL,
        createdAt: new Date(),
      });
      alert("Note successfully");
      setFormData({ title: "", subject: "", description: "", file: null });
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Error uploading file", error);
      alert("Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-800">
          Upload Your Notes
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              required
              onChange={handleChange}
              value={formData.title}
              placeholder="Enter notes title"
              className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-black outline-none"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Subject
            </label>
            <select
              name="subject"
              value={formData.subject}
              required
              onChange={handleChange}
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
              value={formData.description}
              required
              onChange={handleChange}
              placeholder="Description about the notes (short)"
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
              onChange={handleChange}
              required
              ref={fileInputRef}
              className="w-full border border-gray-300 p-2 rounded-lg cursor-pointer"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg transition ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700 text-white"
            }`}
          >
            {loading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadPage;
