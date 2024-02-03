import React, { useContext } from 'react'
import { MdOutlineSegment } from "react-icons/md";
import styled from "styled-components";
import Sidebar from './Sidebar';
import { SMContext } from './SMContext';
import Modal from './Modal';


const Platform = () => {
     let { sidebarStatus, openSidebar,openModal,closeSidebar} = useContext(SMContext);
     let handleModal=()=>
     {
       closeSidebar()
       openModal()
     }
  return (
    <StyledPlatform>
      <main className="w-[90vw] mx-auto h-[100vh]">
        {console.log(sidebarStatus + "LION BILL MAURICE")}
        <button
          className="mt-6 ml-2 md:mt-10 md:ml-0 text-white top-[1rem] left-[1.5rem] md:left-[4rem] absolute"
          onClick={openSidebar}
        >
          <MdOutlineSegment size={25} />
        </button>
        <button
          onClick={handleModal}
          className="modal-btn relative top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 bg-green-500 py-2 px-4 text-white rounded-[4px] cursor-pointer"
        >
          Open Modal
        </button>
        <Sidebar />
        <Modal />
      </main>
    </StyledPlatform>
  );
}


let StyledPlatform = styled.section`
  .modal-btn {
    position: relative;
  }
  .modal-btn:hover::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #004d00;
    z-index: -1;
    border-radius: 4px;
    animation: hover-style 0.7s forwards;
  }

  @keyframes hover-style {
    0% {
      width: 0%;
      border-radius:0px;
    }
    100% {
      width: 100%;
      border-radius:4px;
    }
  }
`;


export default Platform