import React, { useState } from "react";
import { allServices } from "../../constant";
import { PiCaretDoubleRightBold } from "react-icons/pi";
import { Link } from "react-router-dom";
import Drawer from "react-modern-drawer";
import { IoMdClose } from "react-icons/io";

const OurServices = ({ length }) => {
  const [isOpen, setIsOpen] = useState(false);
  const services = allServices.slice(0, length || allServices.length);
  const [selectedService, setSelectedService] = useState(services[0]);

  const handleSelectServiceToShowDetail = (service) => {
    setSelectedService(service);
    setIsOpen(true);
  };
  return (
    <div className="py-[5rem] bg-[#101010] text-white">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-center gap-5 items-center"
      >
        <div data-aos="fade-up" className="gradient-rounded-text-box mb-2">
          Our Services
        </div>
        <h2 data-aos="fade-up" className="heading-2 max-w-[50rem]">
          Empowering Growth Through Reliable Performance
        </h2>
        <p data-aos="fade-up" className="desc max-w-[50rem]">
          Together, We Drive Positive Change for a Better Future
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
          {services.map((service) => (
            <div
              onClick={() => handleSelectServiceToShowDetail(service)}
              data-aos="fade-up"
              key={service.id}
              className="rounded-lg p-[1px] bg-gradient-to-r from-gray-600 to-primary cursor-pointer"
            >
              <div className="rounded-lg bg-[#101010] hover:bg-black/70 transition-all duration-300 p-5 flex flex-col justify-between items-start text-start h-full gap-4">
                <div className="flex flex-col gap-3">
                  <h5 className="font-semibold text-xl font-raleway">
                    {service.title}
                  </h5>
                  <p className="desc text-white/80 line-clamp-6">
                    {service.smallDescription}
                  </p>
                </div>
                <button
                  onClick={() => handleSelectServiceToShowDetail(service)}
                  className="desc mt-1 flex items-center gap-3 hover:text-primary transition-all duration-300"
                >
                  Learn More <PiCaretDoubleRightBold />
                </button>
              </div>
            </div>
          ))}
        </div>
        {length && (
          <Link to="/services" className="primary-btn mt-6">
            All Services
          </Link>
        )}
      </div>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="top"
        className="p-4 z-10 w-screen"
        lockBackgroundScroll
      >
        <div className=" min-h-screen overflow-y-auto">
          {/* Close Button */}
          <div className="mb-3 flex items-center justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-100 hover:text-gray-400 transition-colors"
            >
              <IoMdClose size={28} />
            </button>
          </div>

          {/* Service Content Container */}
          <div className="px-6 pb-8 space-y-6">
            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-100">
              {selectedService.title}
            </h2>

            {/* Small Description */}
            <p className="text-lg text-gray-100 leading-relaxed">
              {selectedService.smallDescription}
            </p>

            {/* Detailed Content */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-100 border-b pb-2">
                Key Features
              </h3>
              <ul className="space-y-4">
                {selectedService.detailContent.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg shadow-sm"
                  >
                    <span className="text-black mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700 flex-1">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default OurServices;
