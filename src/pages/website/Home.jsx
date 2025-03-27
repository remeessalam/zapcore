import React from "react";
import { Link } from "react-router-dom";
import Contact from "../../componets/landingPages/Contact";
import aboutUsImg from "../../assets/images/landing-aboutus.png";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import ReactPlayer from "react-player";
import { homeBannerVideo } from "../../constant";
import OurServices from "../../componets/website/OurServices";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";

const Home = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <ReactPlayer
          url={homeBannerVideo}
          loop
          muted
          width="100%"
          height="100%"
          playsinline
          playing
          className="absolute"
        />
        <div className="bg-gradient-to-r to-black/50 from-transparent absolute w-full h-full"></div>
        <div className="pt-[3rem] wrapper flex items-center h-full">
          <div
            data-aos="fade-up"
            className="relative z-10 px-6 justify-center h-full text-white flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto"
          >
            <div className="rounded-text-box border-white/70 font-medium">
              Welcome to Zapcore Technologies
            </div>
            <h1 className="heading-1">
              Shaping the Future <br /> of Technology
            </h1>
            <p className="desc">
              At Zapcore Technologies, we specialize in crafting innovative
              digital solutions that help businesses grow, engage audiences, and
              improve operational efficiency.
            </p>
            <Link to="/contact-us" className="primary-btn mt-2">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <section className="py-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-right"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          About Us
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div data-aos="fade-right" className="flex h-full flex-col gap-7">
            <div className="flex flex-col gap-7 text-center lg:text-start">
              <h2 className="heading-2">
                Driving Operational Excellence Through Innovative Digital
                Solutions.
              </h2>
              <p className="desc">
                At Zapcore Technologies, we are a team of passionate innovators
                dedicated to delivering smart, reliable digital solutions that
                empower businesses to thrive. With expertise in mobile and web
                app development, AI-powered systems, chatbots, game development,
                and immersive VR & AR experiences, we transform bold ideas into
                reality through cutting-edge technology and creative strategies.
                Our focus on collaboration, trust, and tailored solutions
                ensures that every project not only meets today’s demands but
                also sets the stage for future growth.
              </p>
            </div>
            <div className="flex gap-5 mt-4 justify-center lg:justify-start">
              <Link to="/contact-us" className="primary-btn">
                Contact Us
              </Link>
              <Link to="/services" className="secondary-btn">
                Our Services
              </Link>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aboutUsImg}
              className="object-contain max-h-[30rem]"
              alt=""
            />
          </div>
        </div>
      </section>

      <OurServices length={3} />
      <section className="py-[5rem] bg-black text-white">
        <div
          data-aos="fade-up"
          className="wrapper text-center flex flex-col gap-3"
        >
          <div className="gradient-rounded-text-box mx-auto mb-4">
            Who We Are
          </div>
          <h1 className="heading-2 bg-gradient-to-r from-primary max-w-[50rem] mx-auto to-gray-600 bg-clip-text text-transparent">
            Your Partner in Shaping the Future of Technology
          </h1>
          <p className="desc max-w-[50rem] mx-auto">
            Founded with a passion for innovation, Zapcore Technologies has
            evolved into a trusted partner for businesses aiming to lead in the
            digital era. Our dedicated team of experts crafts tailor-made
            solutions—from mobile and web app development to AI, chatbots, game
            development, and immersive VR & AR experiences—empowering your
            business to thrive in today’s competitive landscape.
          </p>
        </div>
      </section>

      {/* <Faqs /> */}
      <WhyChooseUs />
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <Contact />
    </>
  );
};

export default Home;
