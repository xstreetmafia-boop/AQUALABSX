import { OceanBand } from "@/components/ocean/OceanBand";
import { BrandMark } from "@/components/ocean/BrandMark";
import { CatalogSection } from "@/components/ocean/CatalogSection";
import { BundleSection } from "@/components/ocean/BundleSection";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <section className="relative min-h-screen">
        <OceanBand />

        <div className="pointer-events-none absolute inset-x-0 top-0 flex h-[58vh] items-center justify-center">
          <BrandMark />
        </div>

        <div className="pointer-events-none absolute inset-x-0" style={{ top: "68vh" }}>
          <img
            src="/creatures/starfish.png"
            alt=""
            width={112}
            height={114}
            className="absolute"
            style={{ left: "12%" }}
          />
        </div>
      </section>

      <CatalogSection />

      <BundleSection />
    </div>
  );
}
