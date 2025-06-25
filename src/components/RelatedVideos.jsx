import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";

export const RelatedVideos = () => {
    return (
        <>
            <div className="flex flex-col gap-3 mx-8">
                <div className="w-110 max-sm:w-full flex gap-3 p-2 justify-center border border-gray-300 shadow-md rounded-xl mb-4">
                    <div className="w-55 max-[460px]:h-34">
                        <img className="rounded-lg" src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="thumbnail" />
                    </div>
                    <div>
                        <h1 className="mb-2 max-[520px]:text-[20px] max-[420px]:text-[15px] font-semibold text-2xl">Lorem ipsum dolor</h1>
                        <h3 className="flex max-[520px]:text-[15px] max-[420px]:text-[12px] items-center text-gray-700 gap-2 font-semibold">Raj Shamani <span><IoCheckmarkDoneCircleSharp color="gray" /></span></h3>
                        <span className="max-[520px]:text-[12px]">239k views ● </span><span className="max-[520px]:text-[12px]">16 hours ago</span>
                    </div>
                    <div>
                        <button className="cursor-pointer">
                            <CiMenuKebab size={"20px"} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}