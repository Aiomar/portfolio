export default function Footer() {
  const link =
    "https://ar.wikipedia.org/wiki/%D8%AC%D8%B1%D8%A7%D8%A6%D9%85_%D8%A7%D9%84%D8%AD%D8%B1%D8%A8_%D9%81%D9%8A_%D8%A7%D9%84%D8%AD%D8%B1%D8%A8_%D8%A7%D9%84%D9%81%D9%84%D8%B3%D8%B7%D9%8A%D9%86%D9%8A%D8%A9_%D8%A7%D9%84%D8%A5%D8%B3%D8%B1%D8%A7%D8%A6%D9%8A%D9%84%D9%8A%D8%A9_2023";
  return (
    <footer className="md:h-16 bg-slate-100 dark:bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-xl dark:text-white font-mono text-center ">
          © 2025{" "}
          <a href="" className="hover:underline">
            {" "}
            Made by Omar Aidi
          </a>
        </span>
        <span>
          <a href={link} target="_blank">
            <div className="flex justify-center hover:scale-105">
              <label htmlFor="" className="dark:text-white">
                تضامنًا مع حق الشعب الفلسطيني لا للإبادة الجماعية في غزة
              </label>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1200px-Flag_of_Palestine.svg.png?20241024143411"
                alt=""
                className="w-10 h-6 md:w-9 rounded-md md:ml-2"
              />
            </div>
          </a>
        </span>
      </div>
    </footer>
  );
}
