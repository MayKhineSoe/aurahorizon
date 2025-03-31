import React from "react";
import BannerPng from "../../assets/banner.jpg";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BannerPng})`,
  backgroundPosition: "center",
  backgroundSize: "cover", // ✅ Fixed typo
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

const Banner = () => {
  return (
    <section className="container mb-12 mt-24">
      <div
        style={bgStyle}
        className="container grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 py-14 rounded-3xl"
      >
        <div></div>
        <div className="flex flex-col justify-center">
          <motion.div
            className="text-center md:text-left space-y-4 lg:max-w-[400px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl lg:text-6xl font-bold uppercase">Brand Info</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio reprehenderit in
              pariatur, distinctio aut quae consequuntur beatae quas, laboriosam magni earum nobis
              suscipit, debitis quisquam alias assumenda aperiam obcaecati culpa?
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="primary-btn">Learn More</button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
