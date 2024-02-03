import React, { useContext } from 'react'
import { FaTimes } from "react-icons/fa";
import { GiTreeBranch } from "react-icons/gi";
import { links, social } from '../utils/data'
import { SMContext } from './SMContext';

const Sidebar = () => {
    let {sidebarStatus,closeSidebar,openSidebar}=useContext(SMContext)
  return (
    <section
      className={`absolute top-0 left-0 px-6 py-4 w-[20%] min-w-[300px] bg-green-600 h-screen z-20 text-white grid items-start transition-transform ${!sidebarStatus?"translate-x-[-100%]":null}`}
      style={{ gridTemplateRows: "1fr 10fr 0.5fr" }}
    >
      <header className="flex w-[100%] justify-between">
        <h2 className="text-xl font-medium flex items-center">
          <span className="mr-1">
            <GiTreeBranch />
          </span>
          Social Service
        </h2>
        <button onClick={closeSidebar}>
          <FaTimes size={22} />
        </button>
      </header>
      <ul className="links">
        {links.map((items) => {
          let { id, url, text, icon} = items;
          return (
            <p className="capitalize mt-4 flex items-center text-lg" key={id}>
              <span className="mr-4">{icon}</span>
              {text}
            </p>
          );
        })}
      </ul>
      <footer className="flex justify-between px-8">
        {social.map((items) => {
          let { id, url, icon } = items;
          return <p key={id}>{icon}</p>;
        })}
      </footer>
    </section>
  );
}

export default Sidebar