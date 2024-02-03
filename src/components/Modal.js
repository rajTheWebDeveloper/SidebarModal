import React, { useContext } from 'react'
import { SMContext } from './SMContext';
import { FaChildReaching } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";
import { FaTimes } from "react-icons/fa";


const Modal = () => {
  let { modalStatus,closeModal} = useContext(SMContext);
  return (
    <section
      className={`${
        modalStatus
          ? "absolute top-0 left-0 w-[100vw] h-screen flex justify-center items-center bg-black bg-opacity-50 z-40 overflow-hidden"
          : "hidden"
      }`}
    >
      <article className="w-[90vw] max-w-[500px] h-[200px] md:h-[300px] bg-green-900 py-4 px-3 md:p-4 relative rounded-md cursor-pointer opacity-100 overflow-hidden">
        <header className="flex justify-between items-center w-[100%]">
          <h2 className="text-lg text-green-300 flex items-center">
            Consider Adaption &nbsp;
            <FaChildReaching />
          </h2>
          <LiaTimesSolid
            size={25}
            className="text-white"
            onClick={closeModal}
          />
        </header>
        <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center w-[100%] text-white">
          Lets Prioritize Already Existing Life
        </p>
      </article>
    </section>
  );
}



export default Modal