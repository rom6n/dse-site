import CarRepairIcon from "../assets/carRepairIcon";
import logo from "../assets/dse.png";
import { Link } from "react-router-dom";
import SocialMediaIcon from "../assets/socialMediaIcon";

const NavBar = () => {
  return (
    <nav className="fixed flex font-inter top-0 items-cente inset-x-0 h-12 backdrop-blur-sm bg-black/60 z-50">
      <Link
        to={"/"}
        className="flex flex-row items-center justify-center w-[50%] pr-3 pl-3 h-full"
      >
        <img src={logo} className="object-cover w-full h-[60%]" />
      </Link>
      <div className="flex flex-row-reverse fill-white/80 text-white/80 w-[70%] h-full cursor-pointer">
        <div className="flex gap-1 w-[50%] h-full items-center justify-center transition-all duration-300 border-white/20 hover:bg-white/80 hover:text-black/80 hover:fill-black/80">
          <div className="w-5 h-5">
            <CarRepairIcon />
          </div>
          <span className="font-medium text-sm">Услуги</span>
        </div>
        <div className="flex gap-1 w-[50%] h-full items-center justify-center transition-all duration-300 border-white/20 hover:bg-white/80 hover:text-black/80 hover:fill-black/80">
          <div className="w-5 h-5">
            <SocialMediaIcon />
          </div>
          <span className="font-medium text-sm">Соцсети</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
