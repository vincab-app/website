import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">VinCab</h1>
        <NavLink
          to="#download"
          className="bg-blue-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-600"
        >
          Get the App
        </NavLink>
      </div>
    </nav>
  );
}
