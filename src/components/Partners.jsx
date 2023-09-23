import data from "../lib/data";
const Partners = () => {
  const { partners } = data;

  return (
    <div className="rewards bg-no-repeat bg-left mt-20">
      <div className="top text-center px-6">
        <div className="">
          <h1 className="font-title text-3xl font-bold">{partners.title}</h1>
        </div>
        <div className="">
          <p className="font-body text-sm">{partners.text}</p>
        </div>
      </div>
      <div className="partners flex justify-center items-center p-10 md:p-20">
        {partners.logos.map((logo, index) => (
          <div className="" key={index}>
            <img src={logo} alt="logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
