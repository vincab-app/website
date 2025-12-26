import { NavLink } from "react-router-dom";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

export default function Download() {
  return (
    <section
      id="download"
      className="py-20 bg-gray-900 text-white text-center"
    >
      <h3 className="text-3xl font-bold mb-6">
        Download VinCab Today
      </h3>
      <p className="mb-8">
        Available on Android and iOS
      </p>

      <div className="flex justify-center gap-6">
        {/* GOOGLE PLAY */}
        <NavLink
          to="#download"
          className="flex items-center justify-center
                     h-16 w-44 md:h-20 md:w-52 lg:h-24 lg:w-60
                     hover:opacity-90 transition"
        >
          <img
            src={playstore}
            alt="Get it on Google Play"
            className="max-h-full max-w-full object-contain"
          />
        </NavLink>

        {/* APP STORE */}
        <NavLink
          to="#download"
          className="flex items-center justify-center
                     h-16 w-44 md:h-20 md:w-52 lg:h-24 lg:w-60
                     hover:opacity-90 transition"
        >
          <img
            src={appstore}
            alt="Download on the App Store"
            className="max-h-full max-w-full object-contain"
          />
        </NavLink>
      </div>
    </section>
  );
}
