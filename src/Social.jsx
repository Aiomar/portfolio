function Social({name, details, img, link}) {
  return (
    <div className="flex justify-center space-x-2">
      <a href={link} target="_blank" className="w-96 hover:scale-105">
        <div
          className="flex md:ml-10 justify-center max-w-sm rounded-3xl overflow-hidden shadow-md shadow-sky-400
        bg-sky-100 hover:bg-sky-200  border border-sky-400 "
        >
          <img src={img} className="w-10" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{name}</div>
            <p className="text-gray-700 text-base">{details}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Social;
