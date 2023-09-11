/* eslint-disable react/prop-types */
const SensorCard = ({ borderColor, name, data, icon }) => {
  return (
    <>
      <div className="w-full md:w-1/2 xl:w-1/4">
        <div className={`w-full md:w-[90%] md:mb-5 mx-auto py-3 px-6 shadow-md flex justify-between items-center rounded-md ${borderColor} border-l-8`}>
          <div>
            <h3 className="font-semibold mb-1">{name}</h3>
            <h4 className="text-2xl lg:text-3xl">{data?.msg ? data.msg : 0}</h4>
          </div>
          <div>{icon}</div>
        </div>
      </div>
    </>
  );
};

export default SensorCard;
