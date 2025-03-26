import React from "react";
import { Link } from "react-router-dom";

const UnlockEfficiency = () => {
  return (
    <section className="py-[5rem] text-white bg-[#101010]">
      <div
        data-aos="fade-up"
        className="wrapper flex flex-col text-white items-center gap-5 text-center"
      >
        <div className="gradient-rounded-text-box">Unlock Efficiency</div>
        <h2 className="heading-2">
          Empower Your Business with Cutting-Edge Technology
        </h2>
        <p className="desc max-w-[40rem] text-center">
          At [Your Company Name], we deliver innovative digital solutions—from
          mobile and web app development to AI, chatbots, immersive VR/AR
          experiences, and more—that empower your business to thrive in a
          dynamic digital landscape.
        </p>
        <Link to="/contact-us" className="primary-btn mt-3">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
