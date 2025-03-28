import React from "react";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../componets/landingPages/Contact";
import { aiServicesBanner, aiServicesAbout } from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Portfolio from "../../componets/common/Portfolio";
import ContactForm from "../../componets/common/ContactForm";
import BrandLogos from "../../componets/common/BrandLogos";
import AiLandingServices from "../../componets/landingPages/AjLandingServices";

const AiLandingPage = () => {
  return (
    <>
      <div id="banner" className="h-screen relative">
        <img
          src={aiServicesBanner}
          className="w-full h-full object-cover object-right absolute"
          alt="AI Services"
        />
        <div className="bg-gradient-to-r from-black/70 to-primary/60 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              AI Services
            </div>
            <h1 className="heading-1 text-white">
              Transforming Businesses With Intelligent AI Solutions
            </h1>
            <p className="text-white/90 desc">
              Harness the power of artificial intelligence to drive innovation,
              optimize operations, and unlock new opportunities for growth.
            </p>
            <ScrollLink
              to="contact"
              smooth
              offset={-90}
              className="primary-btn mt-2"
            >
              Get Started
            </ScrollLink>
          </div>
        </div>
      </div>
      <ContactForm />
      <section id="about" className="pb-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          AI Services
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              <h2 className="heading-2">
                Pioneering Intelligent Solutions for the Future
              </h2>
              <p className="desc">
                At Zapcore Technologies, we specialize in delivering
                cutting-edge AI solutions that transform business operations and
                drive innovation. From machine learning implementations to
                predictive analytics and natural language processing, we develop
                intelligent systems that learn, adapt, and deliver measurable
                results. Partner with us to unlock the full potential of
                artificial intelligence for your organization.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-5 mt-4">
              <ScrollLink
                to="contact"
                smooth
                offset={-90}
                className="primary-btn"
              >
                Contact Us
              </ScrollLink>
              <ScrollLink
                to="services"
                smooth
                offset={-80}
                className="secondary-btn"
              >
                Our Services
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={aiServicesAbout}
              className="object-contain max-h-[30rem]"
              alt="AI Services"
            />
          </div>
        </div>
      </section>
      <AiLandingServices /> <WhyChooseUs />
      {/* <Portfolio page="ai-services" /> */}
      <section className="py-[5rem] bg-black text-white">
        <div className="wrapper text-center flex flex-col gap-3">
          <div
            data-aos="fade-up"
            className="gradient-rounded-text-box mx-auto mb-4"
          >
            Our Solutions
          </div>
          <h1
            data-aos="fade-up"
            className="heading-1 bg-gradient-to-r md:min-h-[5rem] from-primary to-secondary bg-clip-text text-transparent"
          >
            Intelligence & Innovation
          </h1>
          <p data-aos="fade-up" className="desc max-w-[50rem] mx-auto">
            In the age of digital transformation, artificial intelligence has
            become the cornerstone of competitive advantage. Our AI services
            empower businesses to leverage machine learning, deep learning, and
            cognitive computing to solve complex challenges, automate processes,
            and gain unprecedented insights. We don't just implement AI - we
            create intelligent ecosystems that evolve with your business needs.
          </p>
        </div>
      </section>
      <section className="bg-gradient-to-r from-gray-800 to-primary/80 md:from-gray-300 md:to-primary/30 overflow-hidden h-[70vh] relative flex items-center">
        <div className="wrapper">
          <div className="flex justify-center md:justify-normal gap-5">
            <div className="absolute -z-10 md:z-10 md:relative flex gap-5">
              <div
                data-aos="fade-up"
                id="to-top"
                className="flex flex-col -translate-y-[20%]"
              >
                <img
                  src={section5Img1}
                  className="h-[10rem] object-contain"
                  alt="AI Visualization"
                />
                <img
                  src={section5Img2}
                  className="h-[10rem] object-contain"
                  alt="Machine Learning"
                />
                <img
                  src={section5Img3}
                  className="h-[10rem] object-contain"
                  alt="Data Analysis"
                />
              </div>
              <div
                data-aos="fade-up"
                id="to-bottom"
                className="flex flex-col translate-y-[20%]"
              >
                <img
                  src={section5Img4}
                  className="h-[10rem] object-contain"
                  alt="Neural Networks"
                />
                <img
                  src={section5Img5}
                  className="h-[10rem] object-contain"
                  alt="Automation"
                />
                <img
                  src={section5Img6}
                  className="h-[10rem] object-contain"
                  alt="Predictive Analytics"
                />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="flex z-10 flex-col gap-5 justify-center ml-10 text-white"
            >
              <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                Innovate
              </h2>
              <div className="flex items-center gap-2">
                <img
                  src={section5Img7}
                  className="sm:flex hidden h-[3rem] lg:h-[5rem] object-contain"
                  alt="AI Icon"
                />
                <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold font-raleway">
                  & Transform
                </h2>
              </div>
              <p className="desc text-white/70">
                Harness the power of intelligent algorithms to drive business
                transformation and innovation
              </p>
            </div>
          </div>
        </div>
      </section>
      <UnlockEfficiency />
      <EndlessOpportunitiesSection />
      <BrandLogos />
      <Contact />
    </>
  );
};

export default AiLandingPage;
