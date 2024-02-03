import React from "react";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
  FaHome,
  FaUserFriends,
  FaFolderOpen,
  FaCalendarAlt,
  FaWpforms,
} from "react-icons/fa";
export const links = [
  {
    id: 1,
    url: "/",
    text: "home",
    icon: <FaHome size={22}/>,
  },
  {
    id: 2,
    url: "/team",
    text: "team",
    icon: <FaUserFriends size={22}/>,
  },
  {
    id: 3,
    url: "/projects",
    text: "projects",
    icon: <FaFolderOpen size={22}/>,
  },
  {
    id: 4,
    url: "/calendar",
    text: "calendar",
    icon: <FaCalendarAlt size={22}/>,
  },
  {
    id: 5,
    url: "/documents",
    text: "documents",
    icon: <FaWpforms size={22}/>,
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
