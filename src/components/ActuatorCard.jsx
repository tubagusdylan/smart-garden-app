/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useState } from "react";

const ActuatorCard = (props) => {
  const { name, topic, status } = props;

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full lg:w-1/2 xl:w-1/4">
      <div className="w-full lg:w-[95%] flex flex-wrap items-center p-4 border border-teal-500 rounded-lg shadow-md">
        <header className="w-1/2 lg:w-full">
          <h1 className="text-lg font-semibold">{name}</h1>
          <span>
            <i>Topic will be: {topic}</i>
          </span>
        </header>
        <div className="w-1/2 lg:w-full text-center lg:mt-3">
          <input type="checkbox" className="" id={name} />
          <label htmlFor={name}>
            <div className="w-[80px] h-9 rounded-full bg-teal-500 flex items-center px-1 cursor-pointer">
              <div className="w-1/2 text-white">{status === "OFF" ? <div className=" w-7 h-7 bg-white rounded-full "></div> : "OFF"}</div>
              <div className="w-1/2 text-white">ON</div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default ActuatorCard;
