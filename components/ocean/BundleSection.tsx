import { FeaturedFish } from "./creatures/FeaturedFish";
import { FISH_ENTRIES } from "./fishData";

export function BundleSection() {
  return (
    <section className="bg-sand-texture px-6 py-20 sm:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-1 flex items-baseline gap-3">
          <h2 className="font-display text-4xl font-black text-black sm:text-5xl">REEF BUNDLES</h2>
          <span className="text-sm text-gray-400">design collection</span>
        </div>
        <p className="mb-10 text-sm text-gray-500">
          Build your own multi-species pack, or grab the full reef set.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-md bg-gray-100 p-6">
            <p className="mb-1 text-2xl font-black text-gray-300 uppercase">Pick Your Reef</p>
            <p className="mb-6 text-sm text-gray-500">Choose any species for your custom pack</p>
            <div className="mb-6 grid grid-cols-5 gap-3">
              {FISH_ENTRIES.map((fish) => (
                <div key={fish.id} className="grayscale opacity-50">
                  <FeaturedFish variant={fish.id} size={56} />
                  <p className="mt-1 text-center text-[0.6rem] text-gray-500">{fish.name}</p>
                </div>
              ))}
            </div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-500">From $19.99 / species</span>
              <button
                type="button"
                className="text-xs text-gray-400 underline underline-offset-2 hover:text-gray-600"
              >
                more info
              </button>
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-blue-500 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Buy
            </button>
          </div>

          <div className="rounded-md bg-gray-100 p-6">
            <p className="mb-1 text-2xl font-black text-gray-300 uppercase">Full Reef Set</p>
            <p className="mb-6 text-sm text-gray-500">Get all species in one discounted bundle</p>
            <div className="mb-6 grid grid-cols-5 gap-3">
              {FISH_ENTRIES.map((fish) => (
                <div key={fish.id}>
                  <FeaturedFish variant={fish.id} size={56} />
                  <p className="mt-1 text-center text-[0.6rem] text-gray-500">{fish.name}</p>
                </div>
              ))}
            </div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-bold text-black">$189.99</span>
              <button
                type="button"
                className="text-xs text-gray-400 underline underline-offset-2 hover:text-gray-600"
              >
                more info
              </button>
            </div>
            <button
              type="button"
              className="w-full rounded-md bg-blue-500 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              Buy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
