import { useContext } from "react";
import { SliderContext } from "../context/sliderContext";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { HiOutlineFire } from "react-icons/hi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { IoIosRadio } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { MdPodcasts } from "react-icons/md";
import { MdOutlineMovieFilter } from "react-icons/md";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { LuCircleHelp } from "react-icons/lu";
import { VscReport } from "react-icons/vsc";



export const Slider = () => {
    const { isSliderOpen, setIsSliderOpen } = useContext(SliderContext)

    return (
        <>
            <div className={`overflow-auto scroll-smooth bg-white border border-amber-300 h-screen fixed top-0 left-0 w-64 py-[18px] z-50 shadow-lg transition-transform duration-200 ease-in-out  ${isSliderOpen ? "translate-x-0 " : "-translate-x-full"}`}>
                <div className="flex items-center gap-2 mx-5">
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
                <div className="flex flex-wrap flex-col">
                    <div className="flex flex-col border-b-1 border-gray-400 py-4">
                        <ul className="p-3 font-semibold text-gray-700">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl bg-gray-200 hover:bg-gray-300 cursor-pointer"><span><IoMdHome size={"25px"} /></span>Home</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><SiYoutubeshorts size={"20px"} /></span>Shorts</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><MdSubscriptions size={"20px"} /></span>Subscription</li>
                        </ul>
                        <ul className="p-3 border-t-1 border-gray-400 font-semibold text-gray-700">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><FaRegCircleUser size={"20px"} /></span>You</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><MdHistory size={"20px"} /></span>History</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold p-3">Explore</h1>
                        <ul className="p-3 font-semibold text-gray-700">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><HiOutlineFire size={"20px"} /></span>Trending</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><MdOutlineShoppingBag size={"20px"} /></span>Shopping</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><IoMusicalNotesOutline size={"20px"} /></span>Music</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><PiNewspaperClippingLight size={"20px"} /></span>News</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><SiYoutubegaming size={"20px"} /></span>Gaming</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><IoIosRadio size={"20px"} /></span>Live</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><MdOutlineMovieFilter size={"20px"} /> </span>Movies</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><MdPodcasts size={"20px"} /> </span>Podcasts</li>
                        </ul>
                    </div>
                    <div className="flex flex-col border-t-1 border-b-1 border-gray-400">
                        <ul className="p-3 font-semibold text-gray-700">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><IoSettingsOutline size={"20px"} /></span>Settings</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><CiFlag1 size={"20px"} /></span>Report history</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><LuCircleHelp size={"20px"} /></span>Help</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl hover:bg-gray-200 cursor-pointer"><span><VscReport size={"20px"} /></span>Send feedback</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex flex-wrap p-5 gap-x-3 font-semibold text-gray-600">
                            <span className="hover:underline">About</span>
                            <span className="hover:underline">Press</span>
                            <span className="hover:underline">Copyright</span>
                            <span className="hover:underline">Contact us</span>
                            <span className="hover:underline">Creator</span>
                            <span className="hover:underline">Advertise</span>
                            <span className="hover:underline mb-3">Developers</span>
                            <span className="hover:underline">Terms</span>
                            <span className="hover:underline">Policy & Safety</span>
                            <span className="hover:underline">How YouTube works</span>
                            <span className="hover:underline">Test new features</span>
                        </div>
                        <p className="text-gray-500 font-semibold mx-4">© 2025 Google LLC</p>
                    </div>
                </div>
            </div>
        </>
    )
}
