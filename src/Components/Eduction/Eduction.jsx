import { GraduationCap, Calendar, Award } from 'lucide-react';
import { motion } from 'framer-motion';


 function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'MITS College',
      year: '2025',
      cgpa: '6.1',
    },
    {
      degree: 'Diploma in Computer Science',
      institution: 'Govt Polytechnic College Jhabua',
      year: '2018',
      cgpa: '7.1',
    },
  ];

  return (
    <section id="education" className="py-10 lg:py-24 px-6 ">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Section Header */}
          <div className="flex items-center gap-3 mb-10 bg-red">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6A5AF9] to-[#FF6AC2] flex items-center justify-center">
              <GraduationCap className="w-6 h-6 " />
            </div>
            <h2 className="text-md md:text-xl">EDUCATION</h2>
          </div>

        {/* Timeline */}
<div className="relative">

  {/* Timeline Line (HIDDEN on mobile) */}
  <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 
    bg-gradient-to-b from-[#6A5AF9] via-[#d946ef] to-[#FF6AC2]" />

  <div className="space-y-10">
    {education.map((edu, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative flex"
      >

        {/* Timeline Dot (HIDDEN on mobile) */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2
          w-4 h-4 rounded-full bg-gradient-to-br from-[#6A5AF9] to-[#FF6AC2] z-10" />

        {/* Card */}
        <div
          className={`w-full lg:w-5/12 border-solid border-2 border-gray-600 rounded-2xl
          ${index % 2 === 0
            ? 'lg:mr-auto lg:pr-0'
            : 'lg:ml-auto lg:pl-0'
          }`}
        >
          <div className="relative bg-white/5 backdrop-blur-lg 
            rounded-2xl p-6 md:p-8
            hover:bg-white/10 transition"
          >
            <h3 className=" mb-3 font-semibold">
              {edu.degree}
            </h3>

            <div className="flex gap-3 mb-2">
              <GraduationCap className="w-5 h-5 text-[#6A5AF9]" />
              <p className="">{edu.institution}</p>
            </div>

            <div className="flex gap-3 mb-2">
              <Calendar className="w-5 h-5 text-[#FF6AC2]" />
              <p className="">Passing Year: {edu.year}</p>
            </div>

            <div className="flex gap-3">
              <Award className="w-5 h-5 text-[#d946ef]" />
              <p className="">CGPA: {edu.cgpa}</p>
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</div>


        </motion.div>
      </div>
    </section>
  );
}

export default Education;
