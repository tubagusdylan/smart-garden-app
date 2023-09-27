const Tutorial = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto">
        <header className="mb-5">
          <h1 className="text-xl lg:text-3xl">Tutorial</h1>
        </header>

        <section id="warning-info" className="w-full lg:w-1/2 py-3 px-5 bg-yellow-50 border border-orange-400 rounded-lg">
          <span>
            <strong className="text-orange-300">Note: This is tutorial for setting up microcontroller ESP32. If you have other microcontroller, skip this tutorial!</strong>
          </span>
        </section>

        <section></section>
      </div>
    </div>
  );
};

export default Tutorial;
