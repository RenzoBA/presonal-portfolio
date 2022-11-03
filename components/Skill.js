import { motion } from "framer-motion";

//sanity
import { urlFor } from "../sanity";

const Skill = ({ leftSide, skill: { title, progress, image } }) => {
  return (
    <motion.div
      initial={{ x: leftSide ? 80 : -80 }}
      transition={{ ease: "anticipate", duration: 1 }}
      whileInView={{ x: 0 }}
      viewport={{ once: true }}
      className="group relative flex justify-center w-20 h-20 md:w-24 md:h-24 cursor-pointer bg-gray-700 shadow-[#202020] shadow-lg rounded-full border-none"
    >
      <img
        src={urlFor(image).url()}
        className="border border-gray-500 rounded-full object-cover filter group-hover:blur-[2px] group-hover:scale-125 group-hover:opacity-40 transition duration-300 ease-in-out p-1"
      />
      <div className="absolute opacity-0 flex flex-col items-center justify-center h-full group-hover:opacity-100 transition duration-300 ease-in-out">
        <p className="relative top-0 text-4xl font-normal text-[#b0ff5d]">
          {progress}
          <span className="text-lg">%</span>
        </p>
        <h5 className="uppercase text-sm text-center font-normal tracking-[5px]">
          {title}
        </h5>
      </div>
    </motion.div>
  );
};

export default Skill;
