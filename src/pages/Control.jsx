import ActuatorCard from "../components/ActuatorCard";
import { actuators } from "../utils/Actuators";

const Control = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-xl lg:text-2xl">Control Actuators</h1>
        </header>

        <section id="subcribe-topic" className="flex flex-wrap w-full gap-10 lg:gap-0 mb-8">
          {actuators.map((actuator) => {
            return <ActuatorCard key={actuator.id} name={actuator.name} topic={actuator.topic} status={actuator.status} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Control;
