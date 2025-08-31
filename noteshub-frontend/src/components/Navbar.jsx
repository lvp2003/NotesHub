import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">NotesHub</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/uploads">Upload Notes</Link>
          </li>
          <li>
            <Link to="#">Browse Notes</Link>
          </li>
          <li>
            <Link to="#">Search</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
