import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiComputerFill } from "react-icons/ri";
import { AiOutlineDashboard, AiOutlineControl, AiOutlineSetting, AiOutlineTool } from "react-icons/ai";

const menus = [
  {
    link: "Dashboard",
    path: "/",
    icon: <AiOutlineDashboard size={25} />,
  },
  {
    link: "Control",
    path: "/control",
    icon: <AiOutlineControl size={25} />,
  },
  {
    link: "Setting MQTT",
    path: "/setting",
    icon: <AiOutlineSetting size={25} />,
  },
  {
    link: "Tutorial",
    path: "/tutorial",
    icon: <AiOutlineTool size={25} />,
  },
];

const SideBar = () => {
  const [showLink, setShowLink] = useState(true);
  const [currentMenu, setCurrentMenu] = useState("Dashboard");

  const handleShowMenu = () => {
    setShowLink(!showLink);
  };

  const handleChangeMenu = (menu) => {
    setCurrentMenu(menu);
    setShowLink(true);
  };

  return (
    <div className="bg-white lg:py-1 lg:min-h-screen lg:bg-teal-500 lg:fixed lg:left-0 lg:w-[20%]">
      <div className="container mx-auto border-b-2 lg:border-none">
        <div className="px-6 lg:flex justify-center items-center py-1 gap-4 hidden border-b-[1px] border-white">
          <RiComputerFill size={50} className="text-white" />
          <span className="text-white text-xl font-semibold">Main Station</span>
        </div>
        <div className="hover:bg-slate-50 px-4 lg:hidden">
          <div className="cursor-pointer py-2" onClick={handleShowMenu}>
            <span className="font-bold mr-3 text-slate-500">{showLink ? ">" : "v"}</span>
            <span className="text-slate-500">{currentMenu}</span>
          </div>
        </div>
        {menus.map((menu, index) => {
          return (
            <NavLink to={menu.path} key={index} className="group">
              <div className="pl-6 py-3 cursor-pointer group-hover:text-teal-500" hidden={showLink} onClick={() => handleChangeMenu(menu.link)}>
                <div className="flex gap-3">
                  {menu.icon}
                  {menu.link}
                </div>
              </div>
            </NavLink>
          );
        })}
        {/* Untuk media large */}
        {menus.map((menu, index) => {
          return (
            <NavLink to={menu.path} key={index} className="pl-6 py-3 cursor-pointer hidden border-b-[1px] hover:bg-teal-400 text-white text-opacity-70 hover:text-opacity-100 lg:flex lg:items-center lg:gap-5">
              {menu.icon}
              {menu.link}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
