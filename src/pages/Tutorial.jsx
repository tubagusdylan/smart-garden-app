import library from "../assets/img/library.png";

const Tutorial = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="mb-5">
          <h1 className="text-2xl lg:text-3xl">Tutorial</h1>
        </header>

        <section id="warning-info" className="w-full lg:w-1/2 py-3 px-5 bg-yellow-50 border border-orange-400 rounded-lg mb-6">
          <span>
            <strong className="text-orange-300 text-sm">Note: This tutorial is for setting up microcontroller ESP32. If you have other microcontroller, skip this tutorial!</strong>
          </span>
        </section>

        <section id="arduino-ide" className="mb-5">
          <h2 className="font-semibold mb-2 text-lg">Setting Arduino IDE</h2>
          <p className="leading-loose">
            First, you have to download the{" "}
            <a href="https://www.arduino.cc/en/software" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-teal-500">
              Arduino IDE
            </a>
            . After that, you can open the Arduino IDE, and then download the ESP32 board library. Here the reference for install esp32 board in your Arduino IDE.{" "}
            <a href="https://randomnerdtutorials.com/installing-esp32-arduino-ide-2-0/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-teal-500">
              Installing ESP32 Board
            </a>
          </p>
        </section>

        <section id="install-library" className="mb-5">
          <h2 className="font-semibold mb-2 text-lg">Installing Library</h2>
          <p className=" mb-2 leading-loose">
            To use mqtt protocols in ESP32, you need to install a library for it. The library name is PubSubClient by Nick O{"'"}Leary. You can go to <strong>Tools {">"} Manage Library</strong>, search for PubSubClient, and install the
            latest version.
          </p>
          <img src={library} alt="" width={300} className="mx-auto lg:mx-0 rounded-lg" />
        </section>

        <section id="new-sketch">
          <h2 className="font-semibold mb-2 text-lg">Create New Sketch</h2>
          <p className="leading-loose mb-2">
            After you installing a libraries, create new sketch to get a template for coding in Arduino IDE. Press <strong>CTRL+N</strong>, it is a shortcut for create a new sketch. In your IDE, you will see the code like this.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Tutorial;
