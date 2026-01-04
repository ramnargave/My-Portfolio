import React from 'react'
import Ram from '../../assets/Ram2.jpg'
import { User, Phone } from 'lucide-react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";


function About() {

  const social = [
    { icon: <FaSquareInstagram />, color: "text-red-600", href: "#", id: 1 },
    { icon: <FaLinkedin />, color: "text-blue-600", href: "#", id: 2 },
    { icon: <FaGithubSquare />, color: "text-black", href: "#", id: 3 },
    { icon: <MdOutlineMail />, color: "text-red-600", href: "#", id: 4 },
    { icon: <Phone />, color: "text-green-600", href: "#", id: 5 },
  ]

  return (
    <div id='about' className="mt-5 pt-5 px-5 lg:px-12">

      {/* Header */}
      <div className="flex gap-2 items-center">
        <div className="p-2 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <User className="text-white" />
        </div>
        <h2 className="text-md md:text-xl">About Me</h2>
      </div>

      {/* Main Content */}
      <div className="mt-5 flex flex-col md:flex-row gap-8 items-center">

        {/* Image Section */}
        <div className="w-full md:w-[40%] h-96 flex justify-center">
          <img
            src={Ram}
            alt="Ram"
            className="w-full max-w-sm rounded-2xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-[60%] flex flex-col justify-center text-center md:text-left">
          <p className="text-gray-700 leading-relaxed font-mono">
            I’m Ramchandra Nargave from Barwani. I have completed my B.Tech in
            Computer Science, and I enjoy exploring new ideas and improving
            myself. I believe in hard work, discipline, and learning every day.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-5 justify-center md:justify-start">
            {social.map(item => (
              <a
                key={item.id}
                href={item.href}
                className={`${item.color} text-2xl hover:scale-110 transition`}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
