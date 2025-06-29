import { useState, useContext, useEffect } from "react";
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
import { logout, setChannel } from "../redux/authSlice.js";
import { useModal } from "../context/modalContext.jsx";




export const Header = () => {
  const { setIsSliderOpen } = useContext(SliderContext);
  const [searchText, setSearchText] = useState("");
  const { isOpen, toggleModal } = useModal();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  let token = localStorage.getItem("token");
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  const channel = useSelector((state) => state.auth.channel);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.clear()
    dispatch(logout());
    window.location.href = "/";
  }

  const handleNavigate = () => {
    navigate("/videos")
  }

  const handleSearch = async () => {
    if (!searchText.trim()) return;
    try {
      const res = await fetch("http://localhost:4001/api/v1/videos")
      const data = await res.json();
      const allVideos = data.videos;

      const filtered = allVideos.filter(video =>
        video.title.toLowerCase().includes(searchText.toLowerCase())
      );
 
      navigate("/videos", { state: { searchResults: filtered } });

    } catch (err) {
      console.error("Search failed:", err.message);
    }
  }

  useEffect(() => {
    const fetchUserChannel = async () => {
      if (user?.id && token) {
        try {
          const res = await fetch(`http://localhost:4001/api/v1/channels/user/${user.id}`);
          if (res.ok) {
            const data = await res.json();
            dispatch(setChannel(data.channel));
          }
        } catch (err) {
          console.error("Failed to fetch user channel:", err.message);
        }
      }
    };
    fetchUserChannel();
  }, [user?.id, token, dispatch]);

  return (
    <>
      <div className="w-full flex items-center justify-between relative bg-white z-50">
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
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search"
              className="w-[40%] px-4 font-semibold p-1 outline-none border border-gray-300 rounded-tl-3xl rounded-bl-3xl"
            />
            <button onClick={handleSearch} className="px-2 py-1.5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-300 duration-200 cursor-pointer">
              <CiSearch size={"20px"} color="gray" />
            </button>
            <button className="ml-2 p-2 bg-gray-200 border border-gray-300 hover:bg-gray-300 duration-200 rounded-full cursor-pointer">
              <FaMicrophone size={"15px"} />
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="max-sm:mx-0 flex items-center gap-4 mx-6">
          <div className="flex gap-2">

            {!isLoggedIn ? (
              <>
                <button className="cursor-pointer max-[510px]:hidden" onClick={toggleModal}>
                  <CiMenuKebab size={"20px"} />
                </button>
                <Link to="/signin">
                  <button className="flex justify-center items-center border w-24 border-gray-300 hover:bg-blue-200 duration-200 cursor-pointer p-1 rounded-full gap-2 mt-2">
                    <span className="text-blue-600 text-xl">
                      <LiaUserCircleSolid />
                    </span>
                    <h1 className="max-sm:text-sm text-blue-600 font-semibold">Sign In</h1>
                  </button>
                </Link>
              </>
            ) : (
              <div className="flex items-center justify-center gap-2">
                <button
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center mr-2 cursor-pointer mt-2"
                  onClick={toggleModal}
                >
                  <img
                    className="h-full object-cover rounded-full"
                    src={user?.profilePic || "/default-avatar.png"}
                    alt="profile"
                  />
                </button>
                <div className="hidden min-[460px]:block">
                  <h1 className="text-sm sm:text-base font-bold md:w-30">{user?.name}</h1>
                </div>
              </div>
            )}


          </div>
        </div>

        <div className="absolute left-16 px-2  sm:hidden flex items-center">
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            autoFocus
            type="text"
            placeholder="Search"
            className="flex-1 px-2 py-[3px] border border-gray-300 rounded-l-full outline-none"
          />
          <button
            className="px-2 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full cursor-pointer"
            onClick={handleSearch}
          >
            <CiSearch size={14} />
          </button>
        </div>
      </div>
      <div>
        {
          isOpen && (
            <div className="fixed top-15 shadow-xl/30 border-gray-300 py-2 rounded-2xl bg-white max-[500px]:right-5 right-34 flex items-center z-50 w-65 h-85">
              <ul className="flex flex-col text-gray-700 w-full">
                {
                  token && (
                    <>
                      {
                        channel ? (
                          <Link to={`/channelinfo/${channel._id}`}>
                            <li className="w-full flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200 hover:rounded-t-xl"><span className="ml-4 text-xl text-gray-800"><TbUserPentagon /></span>My Channel</li>
                          </Link>
                        ) :
                          (<Link to={"/createchannel"}>
                            <li className="w-full flex items-center gap-3 py-3 cursor-pointer hover:bg-gray-200 hover:rounded-t-xl"><span className="ml-4 text-xl text-gray-800"><TbUserPentagon /></span>Create channel</li>
                          </Link>)
                      }
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
        <div className="w-full overflow-x-auto whitespace-nowrap py-3 bg-white dark:bg-gray-900 px-2">
          <div className="flex space-x-3 items-center mx-9">
            <button onClick={() => navigate("/videos", { state: null })} className="px-4 py-2 text-sm rounded-full bg-black text-white dark:bg-white dark:text-black cursor-pointer">
              All
            </button>
            <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Music
            </button>
            <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Live
            </button>
            <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Gaming
            </button>
            <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              News
            </button>
            <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Sports
            </button>
            <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Education
            </button>
            <button className="px-4 py-2 text-sm rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 cursor-pointer">
              Trending
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
