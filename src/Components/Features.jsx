import {
  DollarSign,
  ShieldCheck,
  MapPin,
  CreditCard
} from "lucide-react";

export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose VinCab?
        </h3>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <Feature
            icon={<DollarSign size={32} />}
            title="Affordable Pricing"
            description="Transparent and competitive fares with no hidden charges."
          />

          <Feature
            icon={<ShieldCheck size={32} />}
            title="Verified Drivers"
            description="All drivers are verified to ensure your safety and comfort."
          />

          <Feature
            icon={<MapPin size={32} />}
            title="Live Tracking"
            description="Track your ride in real-time from pickup to destination."
          />

          <Feature
            icon={<CreditCard size={32} />}
            title="Secure Payments"
            description="Multiple payment options with bank-grade security."
          />
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
      <div className="flex justify-center mb-4 text-blue-500">
        {icon}
      </div>
      <h4 className="font-semibold text-lg mb-2">
        {title}
      </h4>
      <p className="text-gray-600 text-sm">
        {description}
      </p>
    </div>
  );
}
