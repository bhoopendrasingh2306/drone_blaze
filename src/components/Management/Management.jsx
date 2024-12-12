import React from 'react'
import { motion } from 'framer-motion'
import { FadeUp } from "../Hero/Hero";
import iot from '../../assets/loT.png';
import drone_bg from '../../assets/drone_b.jpg'
function Management() {
  return (
    <div>
      <div className="container py-14 md:py-24 gap-8 space-y-6 md:space-y-0 bg-black/80">
        <div>
          <motion.div
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className=""
          >
            <p className="text-3xl md:text-6xl font-bold text-red-400">Drone variants and images</p>
          </motion.div>
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={drone_bg}
            alt=""
            className="w-full my-5 object-cover drop-shadow"
          />
        </div>
        <div>
          <motion.div
            variants={FadeUp(0.2)}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <p className="text-sm md:text-md font-medium text-red-400">Remote Access:
              Intelligent flight modes for patrol and waypoint navigation.
              Return-to-Home (RTH) functionality in case of low battery or signal loss.
            </p>
            <p className="text-sm md:text-md font-medium text-red-400">Automatic Work Report Generation:
              work reports generated automatically, check crowd status of target areas.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Management