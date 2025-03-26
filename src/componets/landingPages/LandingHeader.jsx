import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { Link } from "react-scroll";
import { companyDetails, logoImg } from "../../constant";

const options = [
  {
    name: "Home",
    path: "banner",
  },
  {
    name: "About Us",
    path: "about",
  },
  {
    name: "Services",
    path: "services",
  },
  {
    name: "Portfolio",
    path: "portfolio",
  },
  {
    name: "Contact Us",
    path: "contact",
  },
];

const LandingHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 text-white">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link smooth={true} to="banner" className="cursor-pointer relative">
            <img src={logoImg} className="w-[10rem]" alt="logo" />
          </Link>
          <div className="lg:flex items-center gap-10 hidden">
            {options.map((option) => (
              <Link
                to={`${option.path}`}
                className="link text-sm"
                key={option.path}
                spy={true}
                smooth={true}
                offset={-60}
                duration={1000}
                activeClass="active-link"
              >
                {option.name}
              </Link>
            ))}
            <Link
              to={`tel:${companyDetails.phone}`}
              className="text-black font-medium cursor-pointer tracking-wide bg-primary hover:bg-gray-300 text-sm  hover:-translate-y-1 shadow-2xl shadow-transparent rounded-full px-6 py-3 min-w-[7rem] flex justify-center text-center transition-all duration-300"
            >
              Let’s Talk
            </Link>
          </div>
        </div>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="py-4 px-10 z-10"
        >
          <div className="mb-6 flex items-center justify-end pr-[.7rem] py-[.4rem]">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-[2.2rem]"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="flex flex-col gap-6">
            {options.map(({ name, path, id }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={id}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={path}
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
              >
                {name}
              </Link>
            ))}
          </div>
        </Drawer>
        <div
          className="block lg:hidden justify-self-end"
          onClick={toggleDrawer}
        >
          <Hamburger
            color="black"
            size="23"
            toggled={isOpen}
            rounded
            toggle={setIsOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
