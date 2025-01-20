import { FaRegFileAlt } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Card({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.05 }}
      dragElastic={0.2}
      className="flex-shrink-0 relative w-60 h-72 bg-zinc-900/80 rounded-[2.55rem] text-white px-8 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="text-sm mt-5 font-semibold leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 left-0 w-full ">
        <div className="flex items-center justify-between mb-3 px-8 py-3">
          <h5>{data.fileSize}</h5>
          <span className="w-6 h-6 bg-zinc-700 rounded-full flex justify-center items-center">
            {data.available ? <IoMdDownload size="0.9em" /> : <IoCloseSharp />}
          </span>
        </div>

        {data.tag.isOpen && (
          <div
            className={`tag w-full py-4 ${
              data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            <h3 className="text-center text-sm font-semibold">
              {data.tag.tagTitle}
            </h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
