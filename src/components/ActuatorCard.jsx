/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ActuatorCard = (props) => {
  const { name, topic, status } = props;
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
          <input type="checkbox" className="invisible" id="control" />
          <button className="py-2 px-10 bg-teal-500 text-white rounded-full">Halo</button>
        </div>
      </div>
    </div>
  );
};

export default ActuatorCard;
