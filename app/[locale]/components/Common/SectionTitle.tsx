const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "50px",
  textHeading = "text-black dark:text-white",
  textParams = "text-black dark:text-white"
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  textHeading?: string;
  textParams?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`mb-4 text-3xl font-bold !leading-tight ${textHeading}`}>
          {title}
        </h2>
        
        <p className={`text-base !leading-relaxed text-body-color ${textParams}`}>
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
