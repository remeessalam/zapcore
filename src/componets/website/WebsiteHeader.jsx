import Drawer from "react-modern-drawer";
import { Divide as Hamburger } from "hamburger-react";
import { IoMdClose } from "react-icons/io";
import React, { useState } from "react";
import { companyDetails, logoImg, routes } from "../../constant";
import { Link, useLocation } from "react-router-dom";

const WebsiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="py-4 fixed top-0 w-full bg-black/60 backdrop-blur-md z-50 text-white">
      <div className="wrapper flex justify-between items-center gap-10">
        <div className="flex justify-between items-center gap-20 w-full pl-[1rem] lg:pl-0">
          <Link to="/" className="relative">
            <img src={logoImg} className="w-[10rem]" alt="logo" />
          </Link>
          <div className="lg:flex items-center gap-10 hidden">
            {routes.map(({ name, path }) => (
              <Link
                to={`${path}`}
                className={`link text-sm ${
                  pathname === `${path}` && "active-link"
                }`}
                key={path}
              >
                {name}
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
            {routes.map(({ name, path }) => (
              <Link
                onClick={() => setIsOpen(false)}
                key={path}
                className="text-3xl text-white font-medium transition-colors duration-300 link"
                to={path}
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
            color="white"
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

export default WebsiteHeader;
