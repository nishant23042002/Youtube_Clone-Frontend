import { useState, useContext } from "react";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaUserCircleSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { SliderContext } from "../context/sliderContext";

export const Header = ({ openModal }) => {
  const { setIsSliderOpen } = useContext(SliderContext);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="w-full flex items-center justify-between p-2 relative bg-white z-50">
      {/* Left Section */}
      <div className="flex items-center gap-2 mx-3">
        <button onClick={() => setIsSliderOpen(prev => !prev)}>
          <AiOutlineMenu className="cursor-pointer text-gray-700 text-xl" />
        </button>
        <div className="max-sm:w-0 mx-2 w-22">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="max-sm:hidden"
          />
        </div>
      </div>

      {/* Center Section */}
      <div className="w-full flex justify-center items-center">
        {/* Desktop Search */}
        <div className="hidden sm:flex w-full justify-center items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[40%] px-4 font-semibold p-[7px] outline-none border border-gray-300 rounded-tl-3xl rounded-bl-3xl"
          />
          <button className="px-4 py-1.5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-300 duration-200 cursor-pointer">
            <CiSearch size={"26px"} color="gray" />
          </button>
          <button className="ml-2 p-3 bg-gray-200 border border-gray-300 hover:bg-gray-300 duration-200 rounded-full cursor-pointer">
            <FaMicrophone size={"15px"} />
          </button>
        </div>

        {/* Mobile Search Icon */}
        <div className="sm:hidden flex items-center gap-2">
          {!showMobileSearch && (
            <button
              onClick={() => setShowMobileSearch((prev) => !prev)}
              className="p-2 rounded-full bg-gray-100"
            >
              <CiSearch size={22} />
            </button>
          )}
        </div>
      </div>

      {/* Right Section */}
      <div className="max-sm:mx-2 flex items-center gap-4 mx-6">
        <button onClick={openModal}>
          <CiMenuKebab size={"20px"} />
        </button>
        <button className="flex justify-center items-center border w-24 border-gray-300 hover:bg-blue-200 duration-200 cursor-pointer p-2 rounded-full gap-2">
          <span className="text-blue-600 text-xl">
            <LiaUserCircleSolid />
          </span>
          <Link to="/signin">
            <h1 className="max-sm:text-sm text-blue-600 font-semibold">Sign in</h1>
          </Link>
        </button>
      </div>

      {/* Mobile Search Input (Overlay-style) */}
      {showMobileSearch && (
        <div className="absolute left-23 px-4 bg-white sm:hidden flex items-center">
          <input
            autoFocus
            type="text"
            placeholder="Search"
            className="flex-1 px-4 py-1.5 border border-gray-300 rounded-l-full outline-none"
          />
          <button
            className="px-4 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full"
            onClick={() => setShowMobileSearch((prev) => !prev)}
          >
            <CiSearch size={20} />
          </button>
        </div>
      )}
    </header>
  );
};
