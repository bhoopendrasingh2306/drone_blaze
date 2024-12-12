import { motion } from "framer-motion";
import dummyImg from '../assets/dummy.jpeg'


const members=[
  {
    id:1,
    img:dummyImg,
    name:'Bhoopendra Singh',
    experties:'Full Stack Developer',
    year:'4th Year CSE'
  },
  {
    id:2,
    img:dummyImg,
    name:'Abhinav Yadav',
    experties:'Drone Enthuciast',
    year:'4th Year CSE'
  },
  {
    id:3,
    img:dummyImg,
    name:'Akash Bharti',
    experties:'chhota baccha',
    year:'4th Year CSE'
  }
]
const Team = () => {
  return (
    <div className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {members.map((member)=>(
            <div key={member.id} className="flex flex-col items-center justify-center">
              <a href="#"><img src={member.img} className="h-40 w-40 my-4 rounded-full border-2 border-red-600" alt="profile" /></a>
              <h1 className="text-red-600 text-gl md:text-xl font-semibold">{member.name}</h1>
              <h1 className="text-lg font-bold my-2">{member.experties}</h1>
              <p className="text-center md:w-10/12">{member.year}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
