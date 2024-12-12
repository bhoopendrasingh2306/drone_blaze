import React from "react";
import { motion } from "framer-motion";

const ServicesData = [
  {
    id: 1,
    title: "Quickly assess damage in disaster-hit areas for efficient rescue planning.",
    link: "#",
    // icon: <TbTruckDelivery />,
    delay: 0.2,
  },
  {
    id: 2,
    title: " Monitor and manage traffic congestion in urban areas.",
    link: "#",
    // icon: <CiMobile3 />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Track poachers and monitor endangered species in wildlife reserves.",
    link: "#",
    // icon: <RiComputerLine />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Safely inspect hard-to-reach structures like bridges, towers, and wind turbines.",
    link: "#",
    // icon: <IoMdHappy />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Deliver urgent medical supplies to remote or disaster-affected areas.",
    link: "#",
    // icon: <IoPulseOutline />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Provide aerial surveillance to enhance safety during large public gatherings.",
    link: "#",
    // icon: <BiSupport />,
    delay: 0.7,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};
const Services = () => {
  return (
    <section id="services" className="bg-white">
      <div className="container pb-14 pt-32">
        <h1 className="text-4xl font-semibold text-left pb-10">
          Services
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id} 
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#ffffff] border hover:border-red-400 rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-red-400 hover:text-white cursor-pointer duration-300 hover:shadow-2xl"
            >
              {/* <div className="text-4xl mb-4"> {service.icon}</div> */}
              <h1 className="text-md text font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
