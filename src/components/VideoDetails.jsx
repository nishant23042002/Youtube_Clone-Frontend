import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useState } from "react";


export const VideoDetails = () => {
    const [comment, setComment] = useState(false);

    return (
        <>
            <div className="flex border-2 border-green-900">


                {/* Left section */}
                <div className="w-288 p-1 rounded-2xl shadow-xl border-pink-500 border-2 mx-20">
                    {/* Video and title */}
                    <div className="flex flex-col rounded-2xl">
                        <img className="rounded-2xl" src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="thumbnail" />
                        <h1 className="font-bold my-2">Title of the video.</h1>
                    </div>


                    {/* video-info section */}
                    <div className="flex justify-between items-center gap-3 mb-6">
                        <div className="flex justify-center items-center">
                            <div className="mr-4">
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

                        {/* like-dislike section */}
                        <div className="flex gap-3">
                            <div className="bg-gray-200 flex justify-center items-center rounded-3xl">
                                <div className="flex items-center hover:bg-gray-300 rounded-l-3xl justify-center gap-3 p-3 cursor-pointer duration-300 border-r-1 border-gray-300"><SlLike size={"20px"} />6.2k</div>
                                <div className="hover:bg-gray-300 rounded-r-3xl p-3.5 cursor-pointer duration-300"><SlDislike size={"20px"} /></div>
                            </div>
                            <div className="bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer rounded-3xl p-2 duration-300">
                                <div className="flex items-center justify-center gap-2"><span><PiShareFat size={"20px"} /></span>Share</div>
                            </div>
                            <div className="bg-gray-200 hover:bg-gray-300 flex justify-center items-center cursor-pointer rounded-3xl p-3 duration-300">
                                <div className="flex items-center mx-0.5"><span><HiOutlineDotsHorizontal size={"20px"} /></span></div>
                            </div>
                        </div>

                    </div>

                    {/* comments section */}
                    <div className="border border-amber-500">
                        <h1 className="font-bold text-xl mb-4">622 Comments</h1>
                        <div className="flex gap-4">
                            <div>
                                <img className="w-15 rounded-full" src="https://marketplace.canva.com/EAFuecoEOf4/6/0/1600w/canva-orange-and-black-illustrated-gaming-logo-youtube-profile-picture-bFxTLOfTXSs.jpg" alt="profile-picture" />
                            </div>
                            <div className="w-full mr-4">
                                <div className="" onClick={() => setComment(true)}>
                                    <h1 className="text-md font-semibold text-gray-600 border-b-2">Comment Section</h1>
                                </div>
                                {
                                    comment && (
                                        <div>
                                            <input className="w-full p-3 mr-3 text-xl outline-none" placeholder="Write a comment" type="text" name="comments" id="comment" />
                                            <div className="flex gap-4 justify-end mb-3">
                                                <button className="p-2 px-4 rounded-3xl hover:bg-gray-200 duration-300 cursor-pointer" onClick={() => setComment(false)}>cancel</button>
                                                <button className="p-2 px-4 rounded-3xl bg-gray-200 hover:bg-gray-300 duration-300 cursor-pointer">Add comment</button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                        <div className="my-3">
                            <div className="h-auto flex gap-4">
                                <div className="py-2">
                                    <img className="w-12 rounded-full" src="https://marketplace.canva.com/EAFuecoEOf4/6/0/1600w/canva-orange-and-black-illustrated-gaming-logo-youtube-profile-picture-bFxTLOfTXSs.jpg" alt="profile-picture" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-gray-700 font-semibold">@Username</h1>
                                    <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis, sapiente iusto eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, mollitia. inventore quod atque animi eveniet eos. Nobis.</p>
                                    <div className="flex my-2">
                                        <div className="flex gap-2 cursor-pointer px-2 hover:bg-gray-300 duration-300 p-2 rounded-3xl"><span><SlLike size={"20px"} /></span>0</div>
                                        <div className="flex justify-center items-center cursor-pointer hover:bg-gray-300 duration-300 p-2 rounded-3xl"><span><SlDislike size={"20px"} /></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* Right section */}
                <div>
                    <h1>Helllfsfakfzafaffafa</h1>
                </div>
            </div>
        </>
    )
}