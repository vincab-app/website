import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-400 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ride Smart with VinCab
          </h2>
          <p className="text-lg mb-8">
            Fast, safe, and affordable rides at your fingertips.
          </p>
          <div className="flex gap-4">
            <NavLink
              to="#download"
              className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Download App
            </NavLink>
            <NavLink
              to="#how"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600"
            >
              How it Works
            </NavLink>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src="/mockup.png"
            alt="VinCab App"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
