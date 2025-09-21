import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed flex font-inter top-0 items-cente inset-x-0 h-12 backdrop-blur-sm bg-transparent z-50">
      <Link
        to={"/"}
        className="flex flex-row items-center justify-center w-[50%] pr-3 pl-3 h-full"
      >
        <div className="bg-cover bg-[url('/images/dse.png')] w-full h-[60%]" />
      </Link>
    </nav>
  );
};

export default NavBar;
