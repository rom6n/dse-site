import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed flex font-inter top-1 left-2 items-cente inset-x-0 h-12 bg-transparent z-50">
      <Link
        to={"/dse-site/"}
        className="flex flex-row items-center justify-center w-[30%] h-full cursor-pointer"
      >
        <div
          className="flex w-full h-10 items-center justify-center bg-white rounded-full"
          style={{ boxShadow: "0 7px 15px #0000004c" }}
        >
          <div className="bg-cover bg-[url('/images/dse.png')] w-[80%] h-6" />
        </div>
      </Link>
    </nav>
  );
};

export default NavBar;
