import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-6 text-sm">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
        
        {/* Left */}
        <p>
          © {new Date().getFullYear()} VinCab. All rights reserved.
        </p>

        {/* Center */}
        <p>
          Designed by{" "}
          <span className="text-white font-medium">
            GuruCrafts Agency
          </span>
        </p>

        {/* Right */}
        <NavLink
          to="/privacy-policy"
          className="hover:text-white transition underline-offset-4 hover:underline"
        >
          Privacy Policy
        </NavLink>

      </div>
    </footer>
  );
}
