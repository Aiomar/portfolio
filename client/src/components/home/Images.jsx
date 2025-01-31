export default function Images({ img1, img2, img3 }) {
  return (
    <div className="flex mt-2 md:flex-row flex-col justify-center">
      <img
        src={img1}
        alt=""
        className="w-96 rounded-2xl mb-5 ml-2 mr-2 md:mb-0 md:ml-0 md:mr-0 shadow-md
      shadow-sky-400 hover:scale-105 hover:mr-2 "
      />
      <img
        src={img2}
        alt=""
        className="w-96 rounded-2xl md:ml-4 mb-5 ml-2 mr-2 md:mb-0 md:mr-0
      shadow-md shadow-sky-400 hover:scale-105 hover:ml-6 hover:mr-2"
      />
      <img
        src={img3}
        alt=""
        className="w-96 rounded-2xl md:ml-4 mb-5 md:mb-0 mr-2 md:mr-0  shadow-md
      shadow-sky-400 hover:scale-105 hover:ml-6 hover:mr-2"
      />
    </div>
  );
}
