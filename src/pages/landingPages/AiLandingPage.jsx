import React from "react";
import section5Img1 from "../../assets/images/section-5-img-1.png";
import section5Img2 from "../../assets/images/section-5-img-2.png";
import section5Img3 from "../../assets/images/section-5-img-3.png";
import section5Img4 from "../../assets/images/section-5-img-4.png";
import section5Img5 from "../../assets/images/section-5-img-5.png";
import section5Img6 from "../../assets/images/section-5-img-6.png";
import section5Img7 from "../../assets/images/section-5-img-7.png";
import Contact from "../../componets/landingPages/Contact";
import {
  aiServicesBanner,
  aiServicesAbout,
  gamedevelopment,
  gameaboutus,
  gamePortfolio,
} from "../../constant";
import { Link as ScrollLink } from "react-scroll";
import WhyChooseUs from "../../componets/common/WhyChooseUs";
import EndlessOpportunitiesSection from "../../componets/common/EndlessOpportunitiesSection";
import LandingServices from "../../componets/landingPages/LandingServices";
import UnlockEfficiency from "../../componets/common/UnlockEfficiency";
import Portfolio from "../../componets/common/Portfolio";
import ContactForm from "../../componets/common/ContactForm";
import BrandLogos from "../../componets/common/BrandLogos";
import AiLandingServices from "../../componets/landingPages/AjLandingServices";
import { Link } from "react-router-dom";

const AiLandingPage = ({ page }) => {
  const isAi = Boolean(page === "ai");

  return (
    <>
      <div id="banner" className="h-screen relative">
        <img
          src={isAi ? aiServicesBanner : gamedevelopment}
          className="w-full h-full object-cover object-right absolute"
          alt={isAi ? "AI Services" : "Game Development"}
        />
        <div className="bg-gradient-to-r from-black/70 to-primary/60 absolute w-full h-full"></div>
        <div
          data-aos="fade-up"
          className="pt-[3rem] wrapper flex items-center h-full"
        >
          <div className="relative z-10 px-6 justify-center h-full flex flex-col items-center gap-5 text-center md:max-w-[60rem] mx-auto">
            <div className="rounded-text-box border-white/70 font-medium text-white">
              {isAi ? "AI Services" : "Game Development"}
            </div>
            {isAi ? (
              <>
                <h1 className="heading-1 text-white">
                  Transforming Businesses With Intelligent AI Solutions
                </h1>
                <p className="text-white/90 desc">
                  Harness the power of artificial intelligence to drive
                  innovation, optimize operations, and unlock new opportunities
                  for growth.
                </p>
              </>
            ) : (
              <>
                <h1 className="heading-1 text-white">
                  Crafting Unique Gaming Experiences
                </h1>
                <p className="text-white/90 desc">
                  At Zapcore Technologies, we don't just develop games; we
                  create worlds that captivate, challenge, and inspire. Our
                  mission is simple: to deliver exceptional gaming experiences
                  that engage players and leave a lasting impression.
                </p>
              </>
            )}
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
      <div id="portfolio" className="bg-[#101010] text-white py-[5rem]">
        <div className="wrapper">
          <div className="flex flex-col items-center gap-5 text-white">
            <div className="gradient-rounded-text-box">Portfolio</div>
            <h2 className="heading-2 text-center mb-5">
              Our Selected Projects
            </h2>
            <div className="grid grid-cols-1  gap-8 max-w-7xl mx-auto">
              <Link
                to={gamePortfolio[0].link}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                key={gamePortfolio[0].id}
                className="flex  flex-col gap-3 rounded-md overflow-hidden relative group w-full mb-8"
              >
                <div className=" bottom-0 left-0 w-full p-2  text-white flex flex-col gap-2">
                  <h3 className="font-medium text-center">
                    {gamePortfolio[0].title}
                  </h3>
                </div>
                <div
                  className={`border border-slate-400 overflow-hidden rounded-xl ${` w-fit mx-auto`}`}
                >
                  <img
                    src={gamePortfolio[0].img}
                    alt={gamePortfolio[0].title}
                    className={`sm:w-full  group-hover:scale-110 transition-all duration-300 ${"h-fit object-contain rounded max-h-[30rem] sm:max-h-[35rem] "}`}
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section id="about" className="pb-[5rem] bg-black text-white wrapper">
        <div
          data-aos="fade-up"
          className="gradient-rounded-text-box mx-auto lg:mx-0"
        >
          {isAi ? "AI Services" : "Game Development"}
        </div>
        <div className="flex flex-col-reverse items-center lg:grid grid-cols-2 gap-10 mt-7">
          <div
            data-aos="fade-right"
            className="flex h-full flex-col gap-7 text-center lg:text-start"
          >
            <div className="flex flex-col gap-7">
              {isAi ? (
                <>
                  <h2 className="heading-2">
                    Pioneering Intelligent Solutions for the Future
                  </h2>
                  <p className="desc">
                    At Zapcore Technologies, we specialize in delivering
                    cutting-edge AI solutions that transform business operations
                    and drive innovation. From machine learning implementations
                    to predictive analytics and natural language processing, we
                    develop intelligent systems that learn, adapt, and deliver
                    measurable results. Partner with us to unlock the full
                    potential of artificial intelligence for your organization.
                  </p>
                </>
              ) : (
                <>
                  <h2 className="heading-2">
                    Crafting Unique Gaming Experiences
                  </h2>
                  <p className="desc">
                    At Zapcore Technologies, we don't just develop games; we
                    create worlds that captivate, challenge, and inspire.
                    Whether you're a casual gamer or a hardcore enthusiast, our
                    mission is to deliver exceptional gaming experiences that
                    leave a lasting impression.
                  </p>
                </>
              )}
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
                {isAi ? "Our Services" : "Our Games"}
              </ScrollLink>
            </div>
          </div>
          <div data-aos="fade-left" className="h-full">
            <img
              src={isAi ? aiServicesAbout : gameaboutus}
              className="object-contain max-h-[30rem]"
              alt={isAi ? "AI Services" : "Game Development"}
            />
          </div>
        </div>
      </section>
      <AiLandingServices page={isAi} /> <WhyChooseUs />
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
            {isAi
              ? "Intelligence & Innovation"
              : "Crafting Unique Gaming Experiences"}
          </h1>
          <p data-aos="fade-up" className="desc max-w-[50rem] mx-auto">
            {isAi ? (
              <>
                In the age of digital transformation, artificial intelligence
                has become the cornerstone of competitive advantage. Our AI
                services empower businesses to leverage machine learning, deep
                learning, and cognitive computing to solve complex challenges,
                automate processes, and gain unprecedented insights. We don't
                just implement AI – we create intelligent ecosystems that evolve
                with your business needs.
              </>
            ) : (
              <>
                At Zapcore Technologies, we don't just develop games; we create
                worlds that captivate, challenge, and inspire. Our mission is
                simple: to deliver exceptional gaming experiences that engage
                players and leave a lasting impression. Whether you’re a casual
                gamer or a hardcore enthusiast, we design experiences that are
                immersive, dynamic, and tailored to stand out in the competitive
                gaming landscape.
              </>
            )}
          </p>
          <p data-aos="fade-up" className="desc max-w-[50rem] mx-auto mt-6">
            {isAi ? (
              <>
                Our AI services empower businesses to leverage machine learning,
                deep learning, and cognitive computing to solve complex
                challenges, automate processes, and gain unprecedented insights.
              </>
            ) : (
              <>
                We are a diverse group of game developers, designers,
                storytellers, and artists who share a passion for building
                remarkable games. With experience across various platforms and
                genres, we blend creativity with the latest technology to bring
                fresh ideas to life. From mobile games to PC titles, virtual
                reality, and more, our approach focuses on delivering fun,
                engaging, and memorable experiences.
              </>
            )}
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
