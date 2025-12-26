import { ShieldCheck } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Drivers() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl font-bold mb-4">
            Drive with VinCab
          </h3>
          <p className="mb-6">
            Earn money on your own schedule by joining VinCab.
          </p>
          <NavLink
            to="#download"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600"
          >
            Become a Driver
          </NavLink>
        </div>

        <div className="flex justify-center">
          <ShieldCheck size={120} className="text-blue-500" />
        </div>
      </div>
    </section>
  );
}
