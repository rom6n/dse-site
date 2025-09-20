import logo from "../assets/dse.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed flex font-inter top-0 items-center rounded-b-2xl inset-x-0 h-12 backdrop-blur-[5px] bg-black/60 z-50">
      <Link
        to={"/"}
        className="flex flex-row items-center justify-center w-[50%] pr-3 pl-3 h-full"
      >
        <img src={logo} className="object-cover w-full h-[60%]" />
      </Link>
      <div className="flex flex-row-reverse w-[70%] cursor-pointer">
        <div className="flex w-[50%] h-full items-center justify-center rounded-br-2xl transition-all duration-200 border-l border-white/20">
          <span className="text-white/80 font-semibold">Услуги</span>
        </div>
        <div className="flex w-[50%] h-full items-center justify-center rounded-br-2xl transition-all duration-200 border-l border-white/20">
          <span className="text-white/80 font-semibold">Соцсети</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
