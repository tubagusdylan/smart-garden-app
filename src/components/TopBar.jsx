import SideBar from "./SideBar";

const TopBar = () => {
  return (
    <>
      <div className="bg-white fixed top-0 left-0 overflow-hidden w-full">
        <div className="container mx-auto py-3 px-4 border-b-2">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-bold text-lg text-teal-500">SmartGarden</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-[20px] h-[20px] bg-green-500 rounded-full"></div>
              <span className="hidden lg:inline">Connected to broker: </span>
              <button className="py-2 px-4 bg-teal-500 rounded-full text-white">Connect</button>
            </div>
          </div>
        </div>
        <SideBar />
      </div>
    </>
  );
};

export default TopBar;
