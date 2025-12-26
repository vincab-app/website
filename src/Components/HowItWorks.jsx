import { Smartphone, MapPin, Car } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          How VinCab Works
        </h3>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <Step
            icon={<Smartphone size={40} />}
            title="Request a Ride"
            text="Open the app and request a ride instantly."
          />
          <Step
            icon={<MapPin size={40} />}
            title="Get Matched"
            text="We match you with the nearest driver."
          />
          <Step
            icon={<Car size={40} />}
            title="Enjoy the Ride"
            text="Relax and arrive safely at your destination."
          />
        </div>
      </div>
    </section>
  );
}

function Step({ icon, title, text }) {
  return (
    <div className="bg-white p-8 rounded-xl shadow">
      <div className="text-blue-500 mb-4 flex justify-center">
        {icon}
      </div>
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
