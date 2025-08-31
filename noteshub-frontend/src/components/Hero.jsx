import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="bg-black py-20 text-center">
      <h2 className="text-4xl font-bold mb-4 text-white">
        Find & Share Study Notes Easily
      </h2>
      <p className="text-white mb-6">Upload your notes and help Your Friends</p>
      <Link to="/uploads">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
          Upload Your Notes
        </button>
      </Link>
    </section>
  );
}
