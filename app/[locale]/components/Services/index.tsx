import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "@/components/Features/SingleFeature";
import featuresData from "@/components/Features/featuresData";

export default function Services() {
  return (
    <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            title="Dịch vụ"
            paragraph=""
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
  );
}
