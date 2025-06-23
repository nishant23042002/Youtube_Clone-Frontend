import { useContext } from "react";
import { SliderContext } from "../context/sliderContext";
import { AiOutlineMenu } from "react-icons/ai";

export const Slider = () => {
    const { isSliderOpen, setIsSliderOpen } = useContext(SliderContext)

    return (
        <>
            <aside className={`bg-white border border-amber-300 h-screen fixed top-0 left-0 w-64 py-[18px] shadow-lg transition-transform duration-200 ease-in-out  ${isSliderOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex items-center gap-6 mx-8">
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
                <nav className="flex flex-col gap-4">

                </nav>
            </aside>
        </>
    )
}