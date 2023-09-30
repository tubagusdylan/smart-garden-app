/* eslint-disable react/prop-types */
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

const Settings = (props) => {
  const { subcribeTopic, onChangeSubcribeTopic, publishTopic, onChangePublishTopic } = props;

  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="mb-8">
          <h1 className="text-2xl lg:text-3xl">Setting MQTT</h1>
        </header>

        <section id="subcribe-topic" className="flex flex-wrap w-full gap-6 lg:gap-0 mb-8">
          {setMqtt.map((value, index) => {
            return <SettingCard key={index} name={value.name} icon={value.icon} subcribeTopic={subcribeTopic} publishTopic={publishTopic} onChangeSubcribeTopic={onChangeSubcribeTopic} onChangePublishTopic={onChangePublishTopic} />;
          })}
        </section>

        <section id="info">
          <h1 className="text-xl lg:text-2xl mb-6">Reference</h1>
          <p className="text-lg">For further explanation or guidance in the writing mqtt topics, please visit the link below:</p>
          <a href="https://www.hivemq.com/blog/mqtt-essentials-part-5-mqtt-topics-best-practices/" target="_blank" rel="noreferrer" className="underline underline-offset-4 text-teal-500 hover:text-teal-600 font-semibold text-lg">
            MQTT Topics Best Practices
          </a>
        </section>
      </div>
    </div>
  );
};

export default Settings;
