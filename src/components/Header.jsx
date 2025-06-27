import { useState, useContext } from "react";
import { CiSearch, CiMenuKebab } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaUserCircleSolid } from "react-icons/lia";
import { Link, useNavigate } from "react-router-dom";
import { SliderContext } from "../context/sliderContext";
import { IoSettingsOutline } from "react-icons/io5";
import { VscReport } from "react-icons/vsc";
import { CiFlag1 } from "react-icons/ci";
import { HiLanguage } from "react-icons/hi2";
import { GoMoon } from "react-icons/go";
import { TbUserPentagon } from "react-icons/tb";
import { PiSignOutFill } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../services/authSlice.js";


export const Header = ({ openModal, isOpen }) => {
  const { setIsSliderOpen } = useContext(SliderContext);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  // const [channel, setChannel] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  let token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(logout());
    window.location.href = "/";
  }

  const handleNavigate = () => {
    navigate("/videos")
  }

  return (
    <>
      <header className="w-full flex items-center justify-between relative bg-white z-50">
        {/* Left Section */}
        <div className="flex items-center gap-2 ml-3">
          <button onClick={() => setIsSliderOpen(prev => !prev)}>
            <AiOutlineMenu className="cursor-pointer text-gray-700 text-xl" />
          </button>
          <div onClick={handleNavigate} className="max-sm:w-0 mx-2 w-22 cursor-pointer">
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
              className="w-[40%] px-4 font-semibold p-1 outline-none border border-gray-300 rounded-tl-3xl rounded-bl-3xl"
            />
            <button className="px-2 py-1.5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-300 duration-200 cursor-pointer">
              <CiSearch size={"20px"} color="gray" />
            </button>
            <button className="ml-2 p-2 bg-gray-200 border border-gray-300 hover:bg-gray-300 duration-200 rounded-full cursor-pointer">
              <FaMicrophone size={"15px"} />
            </button>
          </div>

          {/* Mobile Search Icon */}
          <div className="sm:hidden flex items-center gap-2">
            {!showMobileSearch && (
              <button
                onClick={() => setShowMobileSearch((prev) => !prev)}
                className="p-2 rounded-full bg-gray-200 cursor-pointer"
              >
                <CiSearch size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="max-sm:mx-0 flex items-center gap-4 mx-6">
          <div className="flex gap-2">
            {
              !isLoggedIn ? (
                <>
                  <button className="cursor-pointer max-[510px]:hidden" onClick={openModal}>
                    <CiMenuKebab size={"20px"} />
                  </button>
                  <Link to="/signin">
                    <button className="flex justify-center items-center border w-24 border-gray-300 hover:bg-blue-200 duration-200 cursor-pointer p-2 rounded-full gap-2 mt-2">
                      <span className="text-blue-600 text-xl">
                        <LiaUserCircleSolid />
                      </span>
                      <h1 className="max-sm:text-sm text-blue-600 font-semibold">{token ? user : "Sign in"}</h1>
                    </button>
                  </Link>
                </>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center mr-2 cursor-pointer mt-2"
                    onClick={openModal}
                  >
                    <img
                      className="h-full object-cover rounded-full"
                      src={user.profilePic}
                      alt="profile"
                    />
                  </button>
                  <div className="hidden min-[460px]:block">
                    <h1 className="text-sm sm:text-base font-bold md:w-30">{user.name}</h1>
                  </div>
                </div>
              )
            }

          </div>
        </div>

        {/* Mobile Search Input (Overlay-style) */}
        {showMobileSearch && (
          <div className="absolute left-16 px-2  sm:hidden flex items-center">
            <input
              autoFocus
              type="text"
              placeholder="Search"
              className="flex-1 px-2 py-[3px] border border-gray-300 rounded-l-full outline-none"
            />
            <button
              className="px-2 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full cursor-pointer"
              onClick={() => setShowMobileSearch((prev) => !prev)}
            >
              <CiSearch size={14} />
            </button>
          </div>
        )}
      </header>
      <div>
        {
          isOpen && (
            <div className="fixed top-15 shadow-xl/30 border-gray-300 py-2 rounded-2xl bg-white max-[500px]:right-5 right-34 flex items-center z-50 w-65 h-85">
              <ul className="flex flex-col text-gray-700 w-full">
                {
                  token && (
                    <>
                      <Link to={"/createchannel"}>
                        <li className="w-full flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200 hover:rounded-t-xl"><span className="ml-4 text-xl text-gray-800"><TbUserPentagon /></span>Create channel</li>
                      </Link>
                      <li onClick={handleLogout} className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200"><span className="ml-4 text-xl text-gray-800"><PiSignOutFill /></span>Sign Out</li>
                    </>
                  )
                }
                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200"><span className="ml-4 text-xl text-gray-800"><GoMoon /></span>Appearance: </li>
                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200"><span className="ml-4 text-xl text-gray-800"><HiLanguage /></span>Language</li>
                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200"><span className="ml-4 text-xl text-gray-800"><IoSettingsOutline /></span>Settings</li>
                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200"><span className="ml-4 text-xl text-gray-800"><CiFlag1 /></span>Help</li>
                <li className="flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200 hover:rounded-b-xl"><span className="ml-4 text-xl text-gray-800"><VscReport /></span>Send feedback</li>
              </ul>
            </div>
          )
        }
      </div>
    </>
  );
};
