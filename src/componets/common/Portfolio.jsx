import React from "react";
import { appPortfolio, webPortfolio } from "../../constant";
import { Link } from "react-router-dom";

const Portfolio = ({ page }) => {
  const isWebDevelopment = page === "web-development";
  const isAppDevelopment = page === "app-development";

  const PortfolioItem = ({ item, isApp }) => (
    <Link
      to={item.link}
      target="_blank"
      rel="noopener noreferrer"
      data-aos="fade-up"
      key={item.id}
      className="flex  flex-col gap-3 rounded-md overflow-hidden relative group w-full mb-8"
    >
      <div className=" bottom-0 left-0 w-full p-2  text-white flex flex-col gap-2">
        <h3 className="font-medium text-center">{item.title}</h3>
      </div>
      <div
        className={`border border-slate-400 overflow-hidden rounded-xl ${
          isApp ? ` w-fit mx-auto` : ` sm:h-fit`
        }`}
      >
        <img
          src={item.img}
          alt={item.title}
          className={`w-full  group-hover:scale-110 transition-all duration-300 ${
            isApp
              ? "h-fit object-contain rounded max-h-[30rem] sm:max-h-[35rem] "
              : "sm:h-fit object-contain"
          }`}
        />
      </div>
    </Link>
  );

  return (
    <div id="portfolio" className="bg-[#101010] text-white py-[5rem]">
      <div className="wrapper">
        <div className="flex flex-col items-center gap-5 text-white">
          <div className="gradient-rounded-text-box">Portfolio</div>
          <h2 className="heading-2 text-center mb-5">Our Selected Projects</h2>

          {isWebDevelopment && (
            <div className="grid md:grid-cols-1 lg:grid-cols-2  gap-8 max-w-7xl mx-auto">
              {webPortfolio.map((item) => (
                <PortfolioItem key={item.id} item={item} isApp={false} />
              ))}
            </div>
          )}

          {isAppDevelopment && (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4  w-full">
              {appPortfolio.map((item) => (
                <PortfolioItem key={item.id} item={item} isApp={true} />
              ))}
            </div>
          )}

          {!isWebDevelopment && !isAppDevelopment && (
            <>
              {webPortfolio.length > 0 && (
                <>
                  <h1 className="text-2xl font-bold text-white">
                    Web Portfolios
                  </h1>
                  <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-8">
                    {webPortfolio.map((item) => (
                      <PortfolioItem key={item.id} item={item} isApp={false} />
                    ))}
                  </div>
                </>
              )}
              {appPortfolio.length > 0 && (
                <>
                  <h1 className="text-2xl font-bold text-white">
                    App Portfolios
                  </h1>
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
                    {appPortfolio.map((item) => (
                      <PortfolioItem key={item.id} item={item} isApp={true} />
                    ))}
                  </div>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
