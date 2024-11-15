function Bio() {
  return (
    <section
      id="Home"
      className="md:w-full md:h-screen flex justify-center bg-slate-900 flex-wrap"
    >
      <div className="md:mt-40 mt-32">
        <div className="flex justify-center ">
          <img
            src="/assets/avater.png"
            className="rounded-full w-52 border-gray-50"
            alt=""
          />
        </div>

        <div className="mt-4 ml-2 flex justify-center">
          <h5 className="mb-2 md:text-3xl font-bold font-mono text-pretty tracking-wider text-white hover:text-sky-400">
            Hi, Im Omar{" "}
          </h5>
        </div>

        <div className="mt-4 flex justify-center ">
          <p className="flex justify-center mb-3 font-semibold  md:text-5xl text-sky-400 animation-terminal ">
            I m a Junior FullStack Web Developper⌨️
          </p>
        </div>
        <div className="flex mt-2 md:flex-row flex-col justify-center">
          <img
            src="assets/code2.png"
            alt=""
            className="w-96 rounded-2xl mb-5 md:mb-0 shadow-md shadow-sky-400 hover:scale-105 hover:mr-2 "
          />
          <img
            src="assets/code1.png"
            alt=""
            className="w-96 rounded-2xl md:ml-4 mb-5 md:mb-0 shadow-md shadow-sky-400 hover:scale-105 hover:ml-6 hover:mr-2"
          />
          <img
            src="assets/code3.png"
            alt=""
            className="w-96 rounded-2xl md:ml-4 mb-5 md:mb-0 shadow-md shadow-sky-400 hover:scale-105 hover:ml-6 hover:mr-2"
          />
        </div>
      </div>
    </section>
  );
}

export default Bio;
