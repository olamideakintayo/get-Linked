import { Link } from "react-router-dom";
import data from "../lib/data";

const Footer = () => {
  const { footer } = data;
  return (
    <div>
      <div className="px-8 py-8  flex flex-col gap-8 md:flex-row md:justify-evenly ">
        <div className="top  basis-1/3">
          <div className="logo">
            <p className="font-title font-bold text-xl flex md:text-3xl">
              {" "}
              <span className="">get</span>{" "}
              <span className="text-common">linked</span>
            </p>
          </div>
          <div className="text mt-4">
            <p className="font-body text-xs ">{footer.text}</p>
          </div>

          <div className="">
            <p className="font-body text-xs mt-4">
              Terms of Use <span className="text-common ">| </span>
              Privacy Policy
            </p>
          </div>
        </div>
        <div className="links">
          <div className="title">
            <h1 className="font-body font-semibold text-common">
              Useful Links
            </h1>
          </div>
          {footer.links.map((link, index) => (
            <ul key={index}>
              <li>
                <Link to={link.url}>{link.text}</Link>
              </li>
            </ul>
          ))}
          <div className="flex gap-6 items-center ">
            <h1 className="font-body text-xs text-common mt-4 ">Follow us</h1>
            {footer.socialMedia.map((logo, index) => (
              <ul className="mt-2" key={index}>
                <li>
                  <img src={logo} alt="logo" />{" "}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="contact mt-8 md:mt-0 flex flex-col gap-4">
          <div className="title">
            <h1 className="font-body font-semibold text-common">Contact Us</h1>
          </div>
          {footer.contact.map((item, index) => (
            <ul key={index}>
              <li className="flex gap-4 items-baseline">
                <span>
                  {" "}
                  <img src={item.icon} alt="icon" />{" "}
                </span>
                <span className={index === 1 && "basis-2/5 md:basis-1/3"}>
                  {item.body}
                </span>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className=" mb-6">
        <p className="font-body text-xs text-center">
          All rights reserved. © getlinked Ltd.
        </p>
      </div>
    </div>
  );
};

export default Footer;
