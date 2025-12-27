import { NavLink } from "react-router-dom";
import logo from "../assets/VinCab_logo.png";
import playstore from "../assets/playstore.png";

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        
        {/* LOGO */}
        <NavLink to="/" className="flex items-center">
          <img
            src={logo}
            alt="VinCab Logo"
            className="h-10 w-10 rounded-full object-cover"
          />
        </NavLink>

        {/* CTA */}
        <NavLink
          to="#download"
          className="flex items-center justify-center hover:opacity-90 transition"
        >
          <img
            src={playstore}
            alt="Get it on Google Play"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </NavLink>

      </div>
    </nav>
  );
}
