import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">NotesHub</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-pink-400 font-semibold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/uploads"
              className={({ isActive }) =>
                isActive ? "text-pink-400 font-semibold" : ""
              }
            >
              Upload Notes
            </NavLink>
          </li>
          <li>
            {/* <NavLink
              to="/browse"
              className={({ isActive }) =>
                isActive ? "text-pink-400 font-semibold" : ""
              }
            >
              Browse Notes
            </NavLink> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}
