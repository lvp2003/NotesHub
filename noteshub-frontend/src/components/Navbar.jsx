export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">NotesHub</h1>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Upload Notes</a>
          </li>
          <li>
            <a href="#">Browse Notes</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
