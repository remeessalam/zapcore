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
      className="flex flex-col gap-3 rounded-md overflow-hidden relative group w-full"
    >
      <img
        src={item.img}
        alt={item.title}
        className={`w-full object-cover group-hover:scale-110 transition-all duration-300 ${
          isApp ? "h-[30rem]" : "h-fit"
        }`}
      />
      <div className="absolute bottom-0 left-0 w-full p-2 bg-primary/80 text-black flex flex-col gap-2">
        <h3 className="font-medium text-center">{item.title}</h3>
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {webPortfolio.map((item) => (
                <PortfolioItem key={item.id} item={item} isApp={false} />
              ))}
            </div>
          )}

          {isAppDevelopment && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {appPortfolio.map((item) => (
                <PortfolioItem key={item.id} item={item} isApp={true} />
              ))}
            </div>
          )}

          {!isWebDevelopment && !isAppDevelopment && (
            <>
              {webPortfolio.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {webPortfolio.map((item) => (
                    <PortfolioItem key={item.id} item={item} isApp={false} />
                  ))}
                </div>
              )}
              {appPortfolio.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  {appPortfolio.map((item) => (
                    <PortfolioItem key={item.id} item={item} isApp={true} />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
