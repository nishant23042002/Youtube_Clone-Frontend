import { useContext } from "react";
import { SliderContext } from "../context/sliderContext";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";

export const Slider = () => {
    const { isSliderOpen, setIsSliderOpen } = useContext(SliderContext)

    return (
        <>
            <div className={`overflow-auto bg-white border border-amber-300 h-screen fixed top-0 left-0 w-64 py-[18px] z-50 shadow-lg transition-transform duration-200 ease-in-out  ${isSliderOpen ? "translate-x-0 " : "-translate-x-full"}`}>
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
                        <ul className="p-3 font-semibold">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl bg-gray-300"><span><IoMdHome size={"25px"} /></span>Home</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl"><span><SiYoutubeshorts size={"20px"} /></span>Shorts</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl "><span><MdOutlineSubscriptions size={"20px"}/></span>Subscription</li>
                        </ul>
                        <ul className="p-3 border-t-1 border-gray-400">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">You</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">History</li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-bold p-3">Explore</h1>
                        <ul className="p-3">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl ">Trending</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl ">Shopping</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl ">Music</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl ">News</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">Gaming</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl ">Sports</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl ">Courses</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl ">Fshion & Beauty</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">Podcasts</li>
                        </ul>
                    </div>
                    <div className="flex flex-col border-t-1 border-gray-400">
                        <ul className="p-3">
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">Settings</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">Report history</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">Help</li>
                            <li className="flex justify-start gap-4 items-center p-2 rounded-xl">Send feedback</li>
                        </ul>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="flex flex-wrap p-3">
                            <span>About</span>
                            <span>Press</span>
                            <span>Copyright</span>
                            <span>Contact us</span>
                            <span>Creator</span>
                            <span>Advertise</span>
                            <span>Developers</span>
                            <span>Terms</span>
                            <span>Policy & Safety</span>
                            <span>How YouTube works</span>
                            <span>Test new features</span>
                        </div>
                        <p>© 2025 Google LLC</p>
                    </div>
                </div>
            </div>
        </>
    )
}