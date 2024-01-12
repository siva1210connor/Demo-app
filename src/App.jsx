import { useState } from "react";
import Tabs from "../components/Tabs";
const App = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "home" },
    { title: "Admin", src: "admin" },
    { title: "Membership", src: "user", gap: true },
    { title: "Advocate ", src: "briefcase" },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-purple-600 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="./src/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 rounded ${
              open && "rotate-[360deg]"
            }`}
          />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-white font-semibold text-sm  items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./src/assets/${Menu.src}.png`} />
              <span
                className={`${!open && "hidden"} origin-left duration-200 `}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        <div className="bg-white p-2 mt-60 text-center rounded-full flex justify-center cursor-pointer">
          <img src="./src/assets/logout.png" alt="logout-logo"/>
          <button className={`${!open && "hidden"} origin-left duration-200 font-semibold ml-2`}>Logout</button>
        </div>
      </div>
      <div className="bg-gray-200 h-screen flex-1 p-7 ">
        <div className=" bg-white text-2xl font-semibold m-10 flex rounded-full w-64">
          <h1 className="bg-gray-400 font-normal text-xs font-size p-5 rounded-full">
            Logo
          </h1>
          <h1 className="p-5">Association</h1>
        </div>
        <div>
          <h1 className="text-3xl font-semibold m-10">Advocates</h1>
          <Tabs />
        </div>
      </div>
    </div>
  );
};
export default App;
