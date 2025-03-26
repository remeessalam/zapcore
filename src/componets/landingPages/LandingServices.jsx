import React from "react";
import { appDevelopmentServices, webDevelopmentServices } from "../../constant";
const LandingServices = ({ page }) => {
  const services =
    page === "web-development"
      ? webDevelopmentServices
      : appDevelopmentServices;
  return (
    <div id="services" className="flex justify-center relative bg-[#101010]">
      <div className="wrapper py-10 flex flex-col items-center gap-5 z-10 text-white">
        <div data-aos="fade-up" className="gradient-rounded-text-box mx-auto">
          Our {page === "web-development" ? "Web" : "App"} Development Services
        </div>
        <h1 data-aos="fade-up" className="heading-2 text-center max-w-2xl">
          {/* We provide the Best IT solution services */}
          {page === "web-development" &&
            "High-Quality Web Development to Transform Your Online Identity"}
          {page === "app-development" &&
            "Cutting-Edge App Development Services for Powerful Mobile Solutions"}
        </h1>
        <p data-aos="fade-up" className="text-center max-w-2xl desc">
          {page === "web-development" &&
            "High-performance web development services designed to create secure, scalable, and user-friendly websites that enhance your business's digital presence."}
          {page === "app-development" &&
            "High-performance app development services designed to deliver secure, scalable, and user-friendly applications that elevate your business's digital reach and engage your audience."}
        </p>
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-10 py-[2rem] mx-auto max-w-6xl"
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="shadow-2xl transition-all border-2 border-primary/50 bg-primary/30 hover:-translate-y-1 hover:bg-primary/25 duration-300 rounded-lg"
            >
              <div className="flex h-full flex-col gap-2 items-center text-center text-white p-5 rounded-lg">
                <item.icon className="w-[6rem] h-[6rem] fill-primary" />
                <h6 className="font-semibold text-2xl font-raleway mt-3">
                  {item.title}
                </h6>
                <p className="text-md text-white/70 desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingServices;
