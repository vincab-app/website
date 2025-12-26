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
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          Google Play
        </button>
        <button className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
          App Store
        </button>
      </div>
    </section>
  );
}
