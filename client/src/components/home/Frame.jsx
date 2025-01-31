export default function Frame({ key, logo, link }) {
  return (
    <div
      key={key}
      className="m-3 hover:scale-90 bg-gray-400 dark:bg-gray-800 w-20 h-20 p-2 rounded-md"
    >
      <a href={link} target="_blank">
        <img src={logo} className="w-16" alt="" />
      </a>
    </div>
  );
}
