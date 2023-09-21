/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ActuatorCard = (props) => {
  const { actuator, onActuatorChange, publishTopic } = props;

  return (
    <div className="w-full lg:w-1/2 xl:w-1/4 lg:mb-8">
      <div className="w-full lg:w-[95%] flex flex-wrap items-center justify-between p-4 border-l-8 border-teal-500 rounded-lg shadow-md ">
        <header className="w-1/2 lg:w-full">
          <h1 className="text-lg font-semibold">{actuator.name}</h1>
          <span>
            <i className="text-sm text-slate-500">
              Topic will be: {publishTopic}/{actuator.topic}
            </i>
          </span>
        </header>
        <div className="w-1/2 lg:w-full text-center lg:mt-3">
          <div className="flex justify-between lg:block">
            <input type="checkbox" className="invisible" id={actuator.name} onChange={() => onActuatorChange(actuator.id)} />
            <label htmlFor={actuator.name}>
              <div className="w-[80px] h-9 rounded-full bg-slate-300 flex items-center px-1 cursor-pointer toggle transition duration-200 ease-in-out">
                <div className="w-7 h-7 bg-white rounded-full toggle-circle transition duration-200 ease-in-out"></div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActuatorCard;
