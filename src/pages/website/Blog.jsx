import React from "react";
import blog1 from "../../assets/images/about-us-pageImg.jpg";
import blog2 from "../../assets/images/about-us-banner.jpg";
import blog3 from "../../assets/images/app-dev-banner.jpg";
import { Link } from "react-router-dom";
import { blogs } from "../../constant";
const Blogs = () => {
  return (
    <div className="pt-[10rem] pb-[4rem] bg-gradient-to-b from-gray-300 to-[#f5f5f5]">
      <div className="wrapper">
        <h1 data-aos="fade-up" className="heading-1 text-center">
          Blogs
        </h1>
        <div className="max-w-5xl mx-auto mt-7 grid sm:grid-cols-2 gap-5">
          {blogs.map((item, i) => (
            <div
              key={item}
              data-aos="fade-up"
              className="group space-y-2 hover:bg-gray-400 transition-all duration-300  p-5 rounded-xl border border-black/20"
            >
              <Link to={item.link}>
                <img
                  src={item.img}
                  alt=""
                  className=" max-h-[15rem] h-[15rem] object-cover w-full rounded-xl transition-all duration-300"
                />
              </Link>
              <Link
                to={`/blogs/${i + 1}`}
                className="text-lg font-semibold line-clamp-2 group-hover:text-purpleColor transition-all duration-300"
              >
                {item.title}
              </Link>
              <p className="line-clamp-3">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
