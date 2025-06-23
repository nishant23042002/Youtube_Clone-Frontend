import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { LiaUserCircleSolid } from "react-icons/lia";
import { useContext } from "react";
import { SliderContext } from "../context/sliderContext";
import { Link } from "react-router-dom";


export const Header = () => {
    const { setIsSliderOpen } = useContext(SliderContext);

    return (
        <>
            <header className="flex items-center justify-between p-2 duration-200">
                {/* Left Section */}
                <div className="flex items-center gap-2 mx-3">
                    <button onClick={() => setIsSliderOpen(prev => !prev)}>
                        <AiOutlineMenu className="cursor-pointer text-gray-700 text-xl w-13" />
                    </button>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube"
                        height={"90px"}
                        width={"90px"}
                    />
                </div>

                {/* Center Section - Search Bar */}
                <div className="w-full flex items-center justify-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-[50%] px-4 font-semibold p-[7px] outline-none border border-gray-300 rounded-tl-3xl rounded-bl-3xl"
                    />
                    <div className="flex justify-center items-center gap-4">
                        <button className="px-4 py-1.5 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-300 duration-200 cursor-pointer">
                            <CiSearch size={"26px"} color="gray" />
                        </button>
                        <button className="p-3 bg-gray-200 border border-gray-300 hover:bg-gray-300 duration-200 rounded-full cursor-pointer">
                            <FaMicrophone size={"15px"} />
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-4 mx-6">
                    <button className="flex justify-center items-center w-27 border border-gray-300 hover:bg-blue-200 duration-200 cursor-pointer p-2 rounded-full gap-2">
                        <span className="text-blue-600"><LiaUserCircleSolid size={"25px"} /></span>
                        <Link to="/signin">
                            <h1 className="text-blue-600 font-semibold">Sign in</h1>
                        </Link>
                    </button>
                </div>
            </header>
        </>
    )
}