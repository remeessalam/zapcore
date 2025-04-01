import React from "react";
import { aiDevelopmentServices, gameDevelopmentServices } from "../../constant";
import { Link } from "react-router-dom";

const AiLandingServices = ({ page }) => {
  const services = page ? aiDevelopmentServices : gameDevelopmentServices;
  const ServiceItem = ({ item }) => (
    <div
      data-aos="fade-up"
      key={item.id}
      className="flex flex-col gap-3 rounded-md overflow-hidden relative group w-full p-5 bg-[#1a1a1a] text-white"
    >
      <item.icon className="text-5xl text-primary" />
      <h3 className="font-medium text-xl">{item.title}</h3>
      <p>{item.description}</p>
    </div>
  );

  return (
    <div id="ai-services" className="bg-[#101010] text-white py-[5rem]">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-white">
          <div className="gradient-rounded-text-box">
            {page ? "AI Services" : "Game Development"}
          </div>
          <h2 className="heading-2 text-center mb-5">
            {page
              ? "Our AI-Powered Solutions"
              : "Our Game Development Solutions"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((item) => (
              <ServiceItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiLandingServices;
