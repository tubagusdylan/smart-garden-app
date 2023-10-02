import library from "../assets/img/library.png";
import sketch from "../assets/img/sketch.png";
import board from "../assets/img/board.png";

const Tutorial = () => {
  return (
    <div className="bg-white xl:px-20">
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

        <section id="new-sketch" className="mb-5">
          <h2 className="font-semibold mb-2 text-lg">Create New Sketch</h2>
          <p className="leading-loose mb-2">
            After you installing a libraries, create new sketch to get a template for coding in Arduino IDE. Press <strong>CTRL+N</strong>, it is a shortcut for create a new sketch. In your IDE, you will see the code like this.
          </p>
          <img src={sketch} alt="" className="mx-auto lg:mx-0 rounded-lg" />
        </section>

        <section id="wifi-section" className="mb-5">
          <h2 className="font-semibold mb-2 text-lg">Connect to Wifi</h2>
          <p className="leading-loose mb-2">Here is the code for connecting ESP32 to MQTT Broker. First, you have to connect your ESP32 to Wifi. In order to add the built-in ESP32 library, you have to select the board to be ESP32.</p>
          <img src={board} alt="" className="mx-auto lg:mx-0 rounded-lg mb-2" />
          <p className="leading-loose mb-2">
            You can see the example codes to connect ESP32 to Wifi, just go to <strong>{"File > Examples > Wifi > WifiClientConnect"}</strong>. Or you can follow this code.
          </p>
          <pre className="border border-slate-400 bg-slate-300 py-3 px-4 text-slate-600 rounded-lg h-[400px] overflow-auto">
            <span>{"#include <WiFi.h>\n\n"}</span>
            <span>{"const char* "}</span>
            <span>ssid = </span>
            <span>{'"your-ssid";\n'}</span>
            <span>{"const char* "}</span>
            <span>password = </span>
            <span>{'"your-password";\n\n'}</span>
            <span>{"void setup(){\n"}</span>
            <span>{"\tSerial.begin(115200);\n"}</span>
            <span>{"\tconnectWifi();\n"}</span>
            <span>{"}\n\n"}</span>
            <span>{"void loop(){"}</span>
            <span>{"}\n\n"}</span>
            <span>{"void "}</span>
            <span>{"connectWifi(){\n"}</span>
            <span>{"\tSerial.println('Connecting to Wifi...');\n"}</span>
            <span>{"\tWiFi.begin(ssid, password);\n"}</span>
            <span>
              {"\twhile ("}
              <span>{"WiFi.status() "}</span>
              {"!= WL_CONNECTED){\n"}
            </span>
            <span>{"\t\tSerial.print('.');\n"}</span>
            <span>{"\t\tdelay(500);\n"}</span>
            <span>{"\t}\n"}</span>
            <span>{"\tSerial.print('Wifi Connected to ');\n"}</span>
            <span>{"\tSerial.println(ssid);\n"}</span>
            <span>{"}"}</span>
          </pre>
        </section>

        <section id="mqtt-section" className="mb-5">
          <h2 className="font-semibold mb-2 text-lg">Connect to MQTT</h2>
          <p className="leading-loose mb-2">
            After the ESP32 connected to Wifi, ESP32 must connect to same MQTT Broker for communicating with this website. You can go to <strong>{"File > Examples > PubSubClient > mqtt_esp8266"}</strong> for example code, but it is using
            ESP8266 Board that have a little different Wifi Library. However, the code for connecting to MQTT Broker is still same. Or you can follow the code below.
          </p>
          <pre className="border border-slate-400 bg-slate-300 py-3 px-4 text-slate-500 rounded-lg h-[400px] overflow-auto">
            <span>{"#include <WiFi.h>\n"}</span>
            <span className="text-black">{"#include <PubSubClient.h>\n\n"}</span>
            <span>{"const char* "}</span>
            <span>ssid = </span>
            <span>{'"your-ssid";\n'}</span>
            <span>{"const char* "}</span>
            <span>password = </span>
            <span>{'"your-password";\n'}</span>
            <span className="text-black">
              <span>{"const char* "}</span>
              <span>mqtt_broker = </span>
              <span>{'"broker.emqx.io";\n\n'}</span>
            </span>
            <span className="text-black">{"WiFiClient espClient;\n"}</span>
            <span className="text-black">{"PubSubClient client(espClient);\n\n"}</span>
            <span>{"void setup(){\n"}</span>
            <span>{"\tSerial.begin(115200);\n"}</span>
            <span>{"\tconnectWifi();\n"}</span>
            <span className="text-black">{"\tclient.setServer(mqtt_broker, 1883);\n"}</span>
            <span>{"}\n\n"}</span>
            <span>{"void loop(){\n"}</span>
            <span className="text-black">
              <span>{"\tif(!client.connected()){\n"}</span>
              <span>{"\t\treconnect();\n"}</span>
              <span>{"\t}\n"}</span>
              <span>{"\tclient.loop();\n"}</span>
            </span>
            <span>{"}\n\n"}</span>
            <span className="text-black">
              <span>{"void reconnect(){\n"}</span>
              <span>{"\tif(client.connect('ESP32_Client')){\n"}</span>
              <span>{"\t\tSerial.print('MQTT Connected to ');\n"}</span>
              <span>{"\t\tSerial.prinln(mqtt_broker);\n"}</span>
              <span>{"\t\treturn;\n"}</span>
              <span>{"\t}\n"}</span>
              <span>{"\tSerial.println('Try again after 3 seconds...');\n"}</span>
              <span>{"\tdelay(3000);\n"}</span>
              <span>{"}\n\n"}</span>
            </span>
            <span>{"void "}</span>
            <span>{"connectWifi(){\n"}</span>
            <span>{"\tSerial.println('Connecting to Wifi...');\n"}</span>
            <span>{"\tWiFi.begin(ssid, password);\n"}</span>
            <span>
              {"\twhile ("}
              <span>{"WiFi.status() "}</span>
              {"!= WL_CONNECTED){\n"}
            </span>
            <span>{"\t\tSerial.print('.');\n"}</span>
            <span>{"\t\tdelay(500);\n"}</span>
            <span>{"\t}\n"}</span>
            <span>{"\tSerial.print('Wifi Connected to ');\n"}</span>
            <span>{"\tSerial.println(ssid);\n"}</span>
            <span>{"}"}</span>
          </pre>
        </section>
      </div>
    </div>
  );
};

export default Tutorial;
