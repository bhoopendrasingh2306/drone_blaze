import React from 'react'
import { motion } from 'framer-motion';
import charging from '../../assets/drone_battery.png'

function Disinfection() {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-3xl md:text-5xl font-bold !leading-snug">Battery and Camera</h1>
            <p className='text-base md:text-lg font-medium'>A surveillance drone equipped with a high-capacity Lithium-Polymer (Li-Po) or Lithium-Ion (Li-Ion) battery (8000–20,000 mAh) can provide 40–60 minutes of continuous flight, extendable to 90 minutes with auxiliary batteries, and supports fast charging in 90–120 minutes. It features a 4K Ultra HD camera with 30x optical zoom, infrared, and thermal imaging for night vision, along with a 10 km control range and 8 km live video transmission. </p>
          </div>
        </motion.div>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={charging}
            alt=""
            className="w-[500px] md:max-w-[550px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  )
}

export default Disinfection
