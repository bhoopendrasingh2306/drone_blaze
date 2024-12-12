const usecases=[
  {
    title: "Aerial Photography and Videography",
    description1 : "Capture high-resolution images and videos from unique angles and perspectives.",
    description2 : "Used in industries such as real estate, filmmaking, tourism, and event coverage to create stunning visuals."
  },
  {
    title : "Agricultural Monitoring",
    description1 : "Assess crop health, soil conditions, and irrigation efficiency using multispectral imaging.",
    description2 : "Helps farmers optimize resource usage, increase yields, and reduce environmental impact."
  },
  {
    title : "Search and Rescue Operations",
    description1 : "Deploy drones equipped with thermal imaging to locate missing persons in remote or hazardous areas.",
    description2 : "Speeds up rescue missions while reducing risks to human responders."
  },
  {
    title : "Infrastructure Inspection",
    description1 : "Inspect bridges, towers, pipelines, and power lines safely and efficiently.",
    description2 : "Eliminates the need for human workers to perform risky inspections at great heights."
  },
  {
    title: "Construction Site Monitoring",
    description1: "Track construction progress and generate 3D models of sites using drones with mapping capabilities.",
    description2: "Improves project efficiency, reduces delays, and enhances communication among teams."
  },
  {
    title: "Medical Supply Delivery",
    description1: "Transport urgent medical supplies such as vaccines, blood, and medications to remote or disaster-affected areas.",
    description2: "Ensures timely access to life-saving resources and improves healthcare logistics."
  },
  {
    title: "Disaster Assessment",
    description1: "Survey disaster-hit areas to assess damage and plan relief operations effectively.",
    description2: "Provides real-time data to emergency teams, accelerating recovery efforts."
  },
  {
    title: "Environmental Monitoring",
    description1: "Monitor air quality, wildlife populations, and deforestation using drones equipped with specialized sensors.",
    description2: "Supports conservation efforts and enables proactive environmental protection."
  },
  {
    title: "Surveillance and Security",
    description1: "Enhance security by providing real-time aerial surveillance of large properties or events.",
    description2: "Used in law enforcement, border patrol, and private security to detect and respond to threats quickly."
  },
  {
    title: "Package Delivery",
    description1: "Deliver parcels, groceries, and even medical aid using drones for last-mile logistics.",
    description2: "Reduces delivery times and costs while minimizing environmental impact in urban areas."
  }
]

const Usecase=()=> {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-10/12 my-28 flex flex-col items-center justify-center'>
            {usecases.map((usecase)=>(
                <div className='w-full my-4'>
                    <h1 className='text-4xl my-2 underline text-red-800'>{usecase.title}</h1>
                    <p className='text-lg font-semibold'>{usecase.description1}</p>
                    <p className='text-lg font-semibold'>{usecase.description2}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Usecase;