export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose VinCab?
        </h3>

        <div className="grid md:grid-cols-4 gap-8">
          <Feature title="Affordable Pricing" />
          <Feature title="Verified Drivers" />
          <Feature title="Live Tracking" />
          <Feature title="Secure Payments" />
        </div>
      </div>
    </section>
  );
}

function Feature({ title }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center font-semibold">
      {title}
    </div>
  );
}
