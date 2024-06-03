/* eslint-disable react/prop-types */

const SectionTitle = ({ title, description }) => {
  return (
    <div className="pt-10 lg:pt-24 mb-5 lg:pb-10">
      <div className="space-y-3">
        <h3 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center text-customPrimary uppercase">{title}</h3>
        <p className="text-center lg:text-lg text-[#356a00] font-semibold lg:tracking-wide">{description}</p>
      </div>
    </div>
  );
};

export default SectionTitle;
