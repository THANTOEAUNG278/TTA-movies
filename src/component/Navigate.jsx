import { NavLink } from "react-router-dom"
import { IoMdHome,IoMdSearch} from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { BiMoviePlay } from "react-icons/bi";
import { SiSteelseries } from "react-icons/si";
import { VscAccount } from "react-icons/vsc";

const Navigate = () => {
  const isActive = ({ isActive }) => {
    return isActive ? 'active' : '';
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-[#092147]">
      <div className="flex justify-between items-center   text-white h-20 mx-16 text-2xl">
        <div className="logo font-bold text-4xl">
          TTA-MOVIES
        </div>
        <div className="flex gap-7">
          <div className="flex items-center justify-center gap-1">
            <IoMdHome />
            <NavLink className={isActive} to={"/"}>Home</NavLink>
          </div>

          <div className="flex items-center justify-center gap-1">
            <IoMdSearch />
            <NavLink to={"/search"}>Search</NavLink>
          </div>

          <div className="flex items-center justify-center gap-1">
            <FiPlus />
            <NavLink to={"/watchList"}>Watchlist</NavLink>
          </div>

          <div className="flex items-center justify-center gap-1">
            <BiMoviePlay />
            <NavLink to={"/movies"}>Movies</NavLink>
          </div>

          <div className="flex items-center justify-center gap-1">
            <SiSteelseries />
            <NavLink to={"/series"}>Series</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <VscAccount />
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navigate;
