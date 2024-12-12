import React from 'react'
import {motion} from 'framer-motion'
import { FadeUp } from "../Hero/Hero";
import slam from '../../assets/20203.jpg'
import drone_vid from '../../assets/drone_fly.mp4'
function Management() {
  return (
    <div>
        <div className="container py-14 md:py-24 space-y-6 md:space-y-0 bg-gray-50">
              {/* <div>
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  src={slam}
                  alt=""
                  className="w-full object-cover drop-shadow"
                />
              </div> */}
              <video className="puductor_drymist_content_video w-full" autoPlay muted preload="auto" loop>
                            <source
                              src={drone_vid}
                              type="video/mp4"
                            />
                          </video>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex flex-col items-start justify-between p-4 relative z-10 -top-20 bg-gray-50 hover:text-white text-red-400 hover:bg-red-400 transition-colors duration-500 ease-in-out"
                >
                <p className="text-3xl md:text-6xl font-bold">GPS Sensors for location tracking</p>
                <ul className='md:text-lg font-medium'>
                  <li>Able to move freely in open space</li>
                  <li>Enhances flight safety and reliability. </li>
                  <li>Ensures drone stability and safety during unexpected disruptions.</li>
                </ul>
              </motion.div>
              <motion.div
                variants={FadeUp(0.2)}
                initial="initial"
                whileInView={"animate"}
                viewport={{ once: true }}
                className="flex flex-col items-start justify-between p-4 relative z-10 -top-20 bg-gray-50 hover:text-white text-red-400 hover:bg-red-400 transition-colors duration-500 ease-in-out"
                > 
                <p className="text-3xl md:text-6xl font-bold">3D Image Capturing Technology</p>
                <ul className='md:text-lg font-medium'>
                  <li>INTEL® REALSENSE™ RGBD camera</li>
                  <li>Powerful 3D perception</li>
                  <li>Accurately takes Images, processing within a reaction time of 0.1 seconds</li>
                </ul>
              </motion.div>
              </div>
        </div>
    </div>
  )
}

export default Management