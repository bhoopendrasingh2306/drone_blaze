import React from "react";
import BannerPng from "../../assets/drone_med.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
            Medical Assistance
            </h1>
            <p className="text-dark2">
            Medical drones are revolutionizing healthcare by providing rapid and reliable delivery of essential medical supplies to remote, disaster-hit, or underserved areas. These drones can transport life-saving items such as blood, vaccines, medications, and medical equipment in a fraction of the time required by traditional transportation methods. Equipped with advanced GPS systems and autonomous navigation, medical drones ensure precise delivery even in challenging terrains or during emergencies. They play a crucial role in disaster response by delivering aid to inaccessible regions and enabling first responders to focus on critical care. With features like temperature-controlled compartments, they preserve the integrity of sensitive medical supplies. By bridging logistical gaps in healthcare systems, medical drones enhance efficiency, save lives, and ensure equitable access to vital medical resources.
            </p>
            <a
              href=""
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
