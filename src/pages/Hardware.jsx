const  Hardwares=[
    {
      title: "Flight Controller",
      description1: "The brain of the drone, responsible for processing inputs from sensors and controlling flight dynamics.",
      description2: "It stabilizes the drone and ensures smooth, precise movements by adjusting motor speeds in real-time."
    },
    {
      title: "Motors",
      description1: "Motors drive the propellers, generating the thrust needed to lift and maneuver the drone.",
      description2: "They come in various sizes and power ratings, depending on the drone's size, weight, and purpose."
    },
    {
      title: "Propellers",
      description1: "The rotating blades that create lift and allow the drone to fly.",
      description2: "The size, material, and shape of propellers affect the drone’s performance, efficiency, and stability."
    },
    {
      title: "GPS Module",
      description1: "Provides precise positioning, enabling navigation, geotagging, and automated flight features.",
      description2: "Integrated with navigation systems for real-time location tracking, Return-to-Home, and waypoint navigation."
    },
    {
      title: "Battery",
      description1: "Power source for the drone, typically Lithium-Polymer (Li-Po) or Lithium-Ion (Li-Ion).",
      description2: "Determines flight time and range, with capacity ranging from smaller 3000mAh to larger 20,000mAh batteries for extended flights."
    },
    {
      title: "Camera and Gimbal",
      description1: "High-resolution cameras capture aerial footage, while gimbals stabilize the camera for smooth shots.",
      description2: "Used in applications like filmmaking, surveillance, and surveying for high-quality, shake-free imagery."
    },
    {
      title: "Sensors",
      description1: "Include GPS, ultrasonic, barometric, and optical flow sensors for stabilization and obstacle avoidance.",
      description2: "These sensors provide critical data for autonomous navigation, flight control, and safe operation."
    },
    {
      title: "ESC (Electronic Speed Controller)",
      description1: "Regulates the speed of the motors based on commands from the flight controller.",
      description2: "Ensures smooth, responsive control by adjusting the motor's power input to maintain desired speeds and stability."
    },
    {
      title: "Transmitter and Receiver",
      description1: "The transmitter is used by the operator to control the drone, while the receiver onboard the drone receives commands.",
      description2: "They communicate wirelessly over a frequency range (typically 2.4 GHz) for real-time control and telemetry data transmission."
    },
    {
      title: "Obstacle Avoidance Sensors",
      description1: "Include LiDAR, ultrasonic, and optical sensors to detect and avoid obstacles in the drone's path.",
      description2: "These sensors ensure safe navigation in complex environments, preventing collisions and enhancing autonomous capabilities."
    },
    {
      title: "Thermal/Infrared Sensors",
      description1: "Used for detecting heat signatures, these sensors allow drones to see in low-light or nighttime conditions.",
      description2: "Crucial for applications like search and rescue, surveillance, and industrial inspections where visibility is poor."
    },
    {
      title: "Onboard Computer",
      description1: "A powerful processor that handles complex tasks like flight planning, data processing, and real-time decision-making.",
      description2: "Used in advanced drones for autonomous operations, machine learning, and data collection tasks."
    }
  ]
  

const Hardware=()=> {
return (
  <div className='w-full flex flex-col items-center justify-center'>
      <div className='w-10/12 my-28 flex flex-col items-center justify-center'>
          {Hardwares.map((hardware)=>(
              <div className='w-full my-4'>
                  <h1 className='text-xl md:text-4xl my-2 underline text-red-800'>{hardware.title}</h1>
                  <p className='text-base md:text-lg font-semibold'>{hardware.description1}</p>
                  <p className='text-base md:text-lg font-semibold'>{hardware.description2}</p>
              </div>
          ))}
      </div>
  </div>
)
}

export default Hardware;