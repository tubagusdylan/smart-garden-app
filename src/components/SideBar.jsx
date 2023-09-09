import { useState } from "react";
import { NavLink } from "react-router-dom";

const menus = [
  {
    link: "Dashboard",
    path: "/",
  },
  {
    link: "Control",
    path: "/control",
  },
  {
    link: "Setting MQTT",
    path: "/setting",
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
    <div className="bg-white shadow-sm">
      <div className="container mx-auto border-b-2">
        <div className="hover:bg-slate-50 px-4">
          <div className="cursor-pointer py-2" onClick={handleShowMenu}>
            <span className="font-bold mr-3 text-slate-500">{showLink ? ">" : "v"}</span>
            <span className="text-slate-500">{currentMenu}</span>
          </div>
        </div>

        {menus.map((menu, index) => {
          return (
            <div key={index} className="pl-6 py-1 cursor-pointer group" hidden={showLink} onClick={() => handleChangeMenu(menu.link)}>
              <NavLink to={menu.path} className="group-hover:text-teal-500">
                {menu.link}
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
