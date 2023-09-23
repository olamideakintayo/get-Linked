import { Link, useLocation } from "react-router-dom";
import data from "../lib/data";
import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const location = useLocation();
  const { navbar } = data;

  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="p-6">
      <div className="mobile flex  justify-between items-center md:hidden ">
        <div className="logo">
          <p className="font-title font-bold text-sm flex">
            {" "}
            <span className="">get</span>{" "}
            <span className="text-common">linked</span>
          </p>
        </div>

        <div className="right">
          <button onClick={() => setShowMenu(true)} className="menu-icon">
            <img src="/src/assets/menu.svg" alt="menu-icon" />
          </button>
          <div
            className={
              showMenu
                ? "navs bg-[#150e28] w-full transition-all duration-300 flex flex-row-reverse justify-between p-6 z-50  absolute top-0 right-0 bottom-0 left-0"
                : "hidden "
            }
          >
            <div className="close-icon">
              <button onClick={() => setShowMenu(false)}>
                <img
                  className="  "
                  src="/src/assets/close-icon.svg"
                  alt="close-icon"
                />
              </button>
            </div>
            <div className="nav-links mt-14 ">
              <ul className="flex flex-col items-start gap-4">
                {navbar.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.url}
                      className="font-inter font-medium text-lg  capitalize"
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
                <Button />
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="desktop hidden md:flex justify-between items-center p-6">
        <div className="logo">
          <p className="font-title font-bold text-4xl flex">
            {" "}
            <span className="">get</span>{" "}
            <span className="text-common">linked</span>
          </p>
        </div>
        <div className="right">
          <div className="nav-links flex gap-14 justify-center items-center ">
            <ul className="flex justify-center items-center gap-5">
              {navbar.links.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.url}
                    className={"font-body font-medium text-[16px]  capitalize"}
                  >
                    {location.pathname === "/contact" &&
                    link.text === "contact" ? (
                      <p className="gradient-text">{link.text}</p>
                    ) : (
                      <p className="font-body">{link.text}</p>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
