import { useState } from "react";

/* eslint-disable react/prop-types */
const SettingCard = (props) => {
  const { name, icon, onChangeSubcribeTopic, onChangePublishTopic, subcribeTopic, publishTopic } = props;

  const [inputSubcribeTopic, setInputSubcribeTopic] = useState("");
  const [inputPublishTopic, setInputPublishTopic] = useState("");

  return (
    <div className="w-full lg:w-1/2">
      <div className="w-full lg:w-[95%] flex border border-teal-500 shadow-md rounded-lg overflow-hidden">
        <div className="w-[70%] py-2 px-4">
          <label htmlFor="subcribe">
            Topic for {name}:
            <input
              type="text"
              className="mt-2 mb-4 block w-[95%] bg-slate-200 px-4 py-2 rounded-lg outline-none focus:ring focus:ring-sky-200"
              placeholder="testtopic/#"
              value={name === "Subcribe" ? inputSubcribeTopic : inputPublishTopic}
              onChange={name === "Subcribe" ? (e) => setInputSubcribeTopic(e.target.value) : (e) => setInputPublishTopic(e.target.value)}
            />
          </label>
          <button
            className="py-1 px-3 bg-teal-500 text-white rounded-lg mb-3"
            onClick={
              name === "Subcribe"
                ? () => {
                    onChangeSubcribeTopic(inputSubcribeTopic);
                    setInputSubcribeTopic("");
                  }
                : () => {
                    onChangePublishTopic(inputPublishTopic);
                    setInputPublishTopic("");
                  }
            }
          >
            Set topic
          </button>
          <h4>This web is {name === "Subcribe" ? "Subcribed" : "Published"} to topic: </h4>
          <b>{name === "Subcribe" ? subcribeTopic : publishTopic}</b>
        </div>
        <div className="w-[30%] bg-teal-700 flex justify-center items-center text-white text-opacity-30">{icon}</div>
      </div>
    </div>
  );
};

export default SettingCard;
