/* eslint-disable react/prop-types */
import ActuatorCard from "../components/ActuatorCard";

const Control = ({ onActuatorChange, actuators }) => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-xl lg:text-2xl">Control Actuators</h1>
        </header>

        <section id="subcribe-topic" className="flex flex-wrap w-full gap-10 lg:gap-0 mb-8">
          {actuators.map((actuator) => {
            return <ActuatorCard key={actuator.id} actuator={actuator} onActuatorChange={onActuatorChange} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Control;
