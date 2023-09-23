import { SiGithub, SiMysql, SiRedis, SiSequelize } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoJavascript, BiLogoReact, BiLogoMongodb } from "react-icons/bi";
import { CHAT_APP_URL, PATIENT_PORTAL_URL } from "../constants";


export default function ProjectsPage() {
  return (
    <div id="projects" className=" min-h-screen flex flex-col justify-center items-center ">
      <div className="animate-fade-in max-w-screen-xl mx-auto p-4 md:p-8">
        <h2 className="text-3xl max-[500px]:text-2xl font-semibold mb-6 text-center">Projects</h2>

        <div className="grid grid-cols-1 min-[950px]:grid-cols-2 gap-4 justify-evenly max-sm:w-11/12 max-[950px]:w-4/5 mx-auto">

          {/* First project card */}
          <div className=" flex flex-col rounded-md bg-[#e4e4e4]  dark:bg-[#090909] text-center border border-[#b4b4b4] dark:border-[#1c1c1c] outline-1 ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 ">
              Realtime Chat App
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                I have developed this real-time Chat web application using React.js, Node.js, Socket.io, MongoDB, and Express, where users can register themselves, and then send and receive real-time messages. I have also implemented the authentication due to which only registered users are able to use it.
              </p>
            </div>
            <div className="bottom-part rounded-b-md bg-[#e4e4e4] dark:bg-[#090909]   flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex ">
                <a href={CHAT_APP_URL} target='_blank' className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiGithub className='text-xl max-[500px]:text-lg' /> </a>
                <a href="" className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md pointer-events-none '> <BsGlobe className='text-xl max-[500px]:text-lg' /> </a>
              </div>
              <div className=" flex ">
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <FaNodeJs className='text-xl max-[500px]:text-lg' /> </p>
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <BiLogoJavascript className='text-xl max-[500px]:text-lg' /> </p>
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <BiLogoReact className='text-xl max-[500px]:text-lg' /> </p>
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <BiLogoMongodb className='text-xl max-[500px]:text-lg' /> </p>


              </div>
            </div>
          </div>

          {/* 2nd project card */}
          <div className="flex flex-col rounded-md bg-[#e4e4e4] dark:bg-[#090909] text-center border border-[#b4b4b4] dark:border-[#1c1c1c] outline-1 ">
            <div className="  border-b border-[#b4b4b4] px-6 py-3 dark:border-neutral-700 ">
              Patient Portal
            </div>
            <div className="p-5 m-0 flex-grow">
              <p className="mb-0 text-base max-[500px]:text-sm text-justify ">
                I have developed a Node.js web application that can be used by different hospitals to maintain patients’
                data. I have implemented redis caching to improve application performance and reduce database costs.
                Session authentication allows only authenticated users to access the portal.
              </p>
            </div>
            <div className="bottom-part rounded-b-md bg-[#e4e4e4] dark:bg-[#090909]   flex justify-between border-t border-[#b4b4b4] px-6 py-3 dark:border-neutral-700  ">
              <div className=" flex ">
                <a href={PATIENT_PORTAL_URL} target='_blank' className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiGithub className='text-xl max-[500px]:text-lg' /> </a>
                <a href="" className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md pointer-events-none '> <BsGlobe className='text-xl max-[500px]:text-lg' /> </a>
              </div>
              <div className=" flex ">
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <FaNodeJs className='text-xl max-[500px]:text-lg' /> </p>
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <BiLogoJavascript className='text-xl max-[500px]:text-lg' /> </p>
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiMysql className='text-xl max-[500px]:text-lg' /> </p>
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiRedis className='text-xl max-[500px]:text-lg' /> </p>
                <p className=' p-2 hover:bg-[#cccccc] dark:hover:bg-[#181818] rounded-md '> <SiSequelize className='text-xl max-[500px]:text-lg' /> </p>



              </div>
            </div>
          </div>

          {/* 3rd project card */}

          {/* 4th project card */}

        </div>
      </div>
    </div>
  )
}