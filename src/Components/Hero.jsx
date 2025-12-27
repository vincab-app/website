import heroVideo from "../assets/hero-video.mp4";
import { NavLink } from "react-router-dom";
import playstore from "../assets/playstore.png";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 text-white overflow-hidden">
      
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ride Smart with VinCab
          </h2>
          <p className="text-lg mb-8 max-w-xl">
            Fast, safe, and affordable rides at your fingertips.
          </p>

          <div className="flex gap-4 flex-wrap">
  {/* Play Store Button */}
  <NavLink
    to="#download"
    className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-3 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1"
  >
    <img
      src={playstore}
      alt="Get it on Google Play"
      className="h-8 md:h-9 w-auto object-contain mr-2"
    />
    <span className="font-semibold">Get it on Play Store</span>
  </NavLink>

  {/* How it Works Button */}
  <NavLink
    to="#how"
    className="flex items-center justify-center px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-blue-600 shadow-md transition-colors transform hover:-translate-y-1"
  >
    How it Works
  </NavLink>
</div>

        </div>
      </div>

    </section>
  );
}
