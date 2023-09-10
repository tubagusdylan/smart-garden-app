import SettingCard from "../components/SettingCard";
import { HiSaveAs, HiUpload } from "react-icons/hi";

const setMqtt = [
  {
    name: "Subcribe",
    icon: <HiSaveAs size={50} />,
  },
  {
    name: "Publish",
    icon: <HiUpload size={50} />,
  },
];

const Settings = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-xl lg:text-2xl">Setting MQTT</h1>
        </header>

        <section id="subcribe-topic" className="flex flex-wrap w-full gap-6 lg:gap-0">
          {setMqtt.map((value, index) => {
            return <SettingCard key={index} name={value.name} icon={value.icon} />;
          })}
        </section>
      </div>
    </div>
  );
};

export default Settings;
