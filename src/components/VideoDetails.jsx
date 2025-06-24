import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";


export const VideoDetails = () => {
    return (
        <>
            <div className="border-2 border-green-900">
                <div className="w-288 p-1 rounded-2xl shadow-xl border-pink-500 border-2 mx-20">
                    {/* Left side */}
                    <div className="flex flex-col rounded-2xl">
                        <img className="rounded-2xl" src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="thumbnail" />
                        <h1>Title of the video.</h1>
                    </div>



                    <div className="border flex justify-between items-center gap-3 my-2">
                        <div className="flex justify-center items-center">
                            <div>
                                <img className="w-15 rounded-full" src="https://marketplace.canva.com/EAFuecoEOf4/6/0/1600w/canva-orange-and-black-illustrated-gaming-logo-youtube-profile-picture-bFxTLOfTXSs.jpg" alt="profile-picture" />
                            </div>
                            <div className="mr-5">
                                <h3 className="flex items-center gap-2 font-semibold">Shark Tank India <span><IoCheckmarkDoneCircleSharp color="gray" /></span></h3>
                                <span className="text-gray-500 text-sm font-semibold">3M subscribers</span>
                            </div>
                            <div>
                                <button className="px-3 rounded-3xl text-white bg-black font-semibold border h-10 cursor-pointer">Subscribe</button>
                            </div>
                        </div>

                        {/* right side */}
                        <div className="flex gap-3">
                            <div className="bg-gray-200 flex justify-center items-center rounded-3xl">
                                <div className="flex items-center hover:bg-gray-400 rounded-l-3xl justify-center gap-3 px-2 p-2 cursor-pointer duration-300 border-r-1 border-gray-300"><SlLike />6.2k</div>
                                <div className="hover:bg-gray-400 rounded-r-3xl px-2 p-3 cursor-pointer duration-300"><SlDislike /></div>
                            </div>
                            <div className="bg-gray-200 hover:bg-gray-400 flex justify-center items-center cursor-pointer rounded-3xl p-2 duration-300">
                                <div className="flex items-center justify-center gap-2"><span><PiShareFat /></span>Share</div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}