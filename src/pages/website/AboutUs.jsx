import React from "react";
import {
  aboutUsBanner,
  aboutUsGridImg1,
  aboutUsGridImg2,
  aboutUsGridImg3,
  aboutUsGridImg4,
  aboutUsGridImg5,
  aboutUsPageImg,
  whyChooseUsContent,
} from "../../constant";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import OurServices from "../../componets/website/OurServices";
import Testimonials from "../../componets/common/Testimonials";

const AboutUs = () => {
  return (
    <>
      <div
        data-aos="fade-down"
        className="h-[40vh] sm:h-[55vh] md:h-[70vh] relative"
      >
        <img
          src={aboutUsBanner}
          className="object-cover object-[100%_0%] h-full w-full"
          alt=""
        />
      </div>
      <div className="pt-[5rem] text-white text-center">
        <div className="wrapper flex flex-col items-center gap-5 mb-[5rem]">
          <div data-aos="fade-up" className="gradient-rounded-text-box">
            About Us
          </div>
          <div className="mt-[3rem] grid md:grid-cols-2 gap-5">
            <div
              data-aos="fade-right"
              className="h-full flex items-center overflow-hidden rounded-lg"
            >
              <img
                src={aboutUsPageImg}
                className="scale-125 max-h-[26rem] w-full object-cover"
                alt="about us"
              />
            </div>
            <div data-aos="fade-left" className="h-full">
              <h2 className="heading-2 text-start mb-3">About Us</h2>
              <p className="desc text-start">
                At [Your Company Name], we are a team of passionate innovators,
                developers, engineers, and designers dedicated to crafting
                cutting-edge digital solutions. Specializing in mobile and web
                app development, custom software, AI-powered systems—including
                chatbots and machine learning—and immersive VR & AR experiences,
                we transform bold ideas into impactful digital realities.
                <br />
                <br />
                We build modern, responsive websites, high-performance mobile
                applications, and intelligent, scalable solutions that drive
                growth and enhance operational efficiency. With a strong
                commitment to quality, security, and timely delivery, our
                tailored approach ensures each project meets your unique
                business objectives.
                <br />
                <br />
                We believe in forging long-term partnerships by exceeding
                expectations and fostering innovation. Your success is our
                priority—let’s build something extraordinary together.
              </p>
            </div>
          </div>
          <h2 data-aos="fade-up" className="heading-2 mt-[4rem]">
            Magic Behind Our IT Solutions
          </h2>
          <p data-aos="fade-up" className="desc max-w-[50rem]">
            Our process begins with a comprehensive needs assessment to
            understand your unique requirements, challenges, and goals—ensuring
            every solution is precisely tailored to drive success.
          </p>
          <div className="pt-[3rem]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation at Heart
                  </h6>
                  <p className="desc mt-2">
                    At [Your Company Name], innovation drives us forward. We
                    continuously explore emerging technologies to create
                    future-ready solutions that address today’s challenges and
                    anticipate tomorrow’s opportunities.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg1}
                    alt="Innovation at Heart"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg2}
                    alt="Client-Centric Approach"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-gray-600 to-gray-800"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Client-Centric Approach
                  </h6>
                  <p className="desc mt-2">
                    We understand that every business is unique. Our
                    personalized approach tailors each project to meet your
                    specific goals, fostering long-term partnerships built on
                    trust, transparency, and shared success.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-10 sm:gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Commitment to Excellence
                  </h6>
                  <p className="desc mt-2">
                    Quality, reliability, and security form the foundation of
                    our work. We deliver robust, scalable digital products that
                    exceed industry standards and your expectations.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg3}
                    alt="Commitment to Excellence"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
              <div className="flex flex-col sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div data-aos="fade-right" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg4}
                    alt="Innovation with Purpose"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
                <div
                  data-aos="fade-left"
                  className="rounded-xl p-5 bg-gradient-to-r from-gray-600 to-gray-800"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    Innovation with Purpose
                  </h6>
                  <p className="desc mt-2">
                    We leverage technology to create meaningful
                    impact—streamlining processes, enhancing customer
                    experiences, and driving growth. Our solutions are designed
                    to deliver real value and transform your business.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse sm:grid text-start grid-cols-2 gap-5 max-w-5xl mx-auto">
                <div
                  data-aos="fade-right"
                  className="rounded-xl p-5 bg-gradient-to-r from-primary/60 to-primary/80"
                >
                  <h6 className="font-bold text-lg font-raleway">
                    End to End Solutions
                  </h6>
                  <p className="desc mt-2">
                    From concept to deployment and beyond, we offer a complete
                    suite of services to support your digital journey. Our
                    holistic solutions are scalable, secure, and aligned with
                    your business vision.
                  </p>
                </div>
                <div data-aos="fade-left" className="h-full flex items-center">
                  <img
                    src={aboutUsGridImg5}
                    alt="End to End Solutions"
                    className="h-full max-h-[15rem] my-auto object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="wrapper mt-[5rem]">
      <h2 data-aos='fade-up' className="heading-2">Why Choose AI Company?</h2>
      <ul className="mt-[2rem] flex flex-col gap-3 list-disc list-outside text-start">
      {whyChooseUsContent.map((item) => (
        <li data-aos='fade-up' key={item.id} className="text-primary">
        <span className="font-raleway font-bold">{item.title}:</span>{" "}
        <span className="desc text-white ml-1">{item.desc}</span>
        </li>
        ))}
        </ul>
    </div> */}
        </div>
      </div>

      <UnlockEfficiency />
      {/* <OurServices length={3} /> */}
      {/* <Testimonials/> */}
    </>
  );
};

export default AboutUs;
