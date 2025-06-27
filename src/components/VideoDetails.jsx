import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RelatedVideos } from "./RelatedVideos";
import { useParams } from "react-router-dom";


export const VideoDetails = () => {
    const { id } = useParams(); // Get video ID from URL
    const [videoInfo, setVideo] = useState(null);
    const [comment, setComment] = useState(false);

    useEffect(() => {
        const getVideo = async () => {
            try {
                let response = await fetch(`http://localhost:4001/api/v1/videos/${id}`)
                const data = await response.json();
                console.log(data);
                setVideo(data.video);
            } catch (err) {
                console.error("Error fetching video:", err);
            }
        };
        getVideo();
    }, [id])



    return (
        <>
            <div className="flex max-xl:flex-col mt-8">
                {/* Left section */}
                <div className="rounded-2xl mx-6 max-xl:w-auto w-300">
                    {/* Video and title */}
                    <div className="flex flex-col rounded-2xl">
                        <img className="rounded-2xl" src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="thumbnail" />
                        <h1 className="font-bold my-2">{videoInfo?.title}</h1>
                    </div>


                    {/* video-info section */}
                    <div className="flex justify-between items-center gap-3 mb-2">
                        <div className="flex justify-center items-center max-md:hidden">
                            <div className="mr-4 w-15 max-lg:w-10">
                                <img className="rounded-full" src={videoInfo?.channelId?.profilePicture} alt="profile-picture" />
                            </div>
                            <div className="mr-5">
                                <h3 className="flex items-center gap-2 font-semibold w-42">{videoInfo?.channelId?.name} <span><IoCheckmarkDoneCircleSharp color="gray" /></span></h3>
                                <span className="text-gray-500 text-sm font-semibold">3M subscribers</span>
                            </div>
                            <div>
                                <button className="px-3 rounded-3xl text-white bg-black font-semibold h-10 cursor-pointer">Subscribe</button>
                            </div>
                        </div>

                        {/* like-dislike section */}
                        <div className="flex gap-3 max-md:hidden">
                            <div className="bg-gray-200 flex justify-center items-center rounded-3xl">
                                <div className="flex items-center hover:bg-gray-300 rounded-l-3xl justify-center gap-3 p-3 cursor-pointer duration-300 border-r-1 border-gray-300"><SlLike size={"20px"} />{videoInfo?.likes}</div>
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


                    {/* 👇 Compact version for small screens only */}
                    <div className="flex md:hidden justify-between items-center gap-2 mb-4 px-2">
                        {/* Profile + Subscribe */}
                        <div className="flex items-center gap-2">
                            <img
                                className="w-8 h-8 rounded-full"
                                src={videoInfo?.channelId?.profilePicture}
                                alt="profile-picture"
                            />
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold flex items-center gap-1">
                                    {videoInfo?.channelId?.name} <IoCheckmarkDoneCircleSharp className="text-gray-500" size={14} />
                                </h3>
                                <span className="text-xs text-gray-500">3M subs</span>
                            </div>
                        </div>

                        {/* Subscribe Button */}
                        <button className="text-xs px-3 py-1 rounded-2xl text-white bg-black font-semibold">
                            Subscribe
                        </button>
                    </div>


                    <div className="flex md:hidden justify-between items-center gap-2 px-2 mb-4">
                        {/* Like/Dislike */}
                        <div className="flex bg-gray-200 rounded-3xl overflow-hidden">
                            <button className="px-2 py-1 text-sm flex items-center gap-1 hover:bg-gray-300">
                                <SlLike size={14} /> {videoInfo?.likes}
                            </button>
                            <button className="px-2 py-1 hover:bg-gray-300">
                                <SlDislike size={14} />
                            </button>
                        </div>

                        {/* Share */}
                        <button className="flex items-center gap-1 text-sm bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-2xl">
                            <PiShareFat size={14} /> Share
                        </button>

                        {/* More */}
                        <button className="bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded-full">
                            <HiOutlineDotsHorizontal size={16} />
                        </button>
                    </div>



                    {/* Add comments */}
                    <div>
                        <h1 className="font-bold text-xl mb-4">622 Comments</h1>
                        <div className="flex gap-4">
                            <div className="w-15">
                                <img className="rounded-full" src="https://marketplace.canva.com/EAFuecoEOf4/6/0/1600w/canva-orange-and-black-illustrated-gaming-logo-youtube-profile-picture-bFxTLOfTXSs.jpg" alt="profile-picture" />
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

                        {/* comment section */}
                        <div className="flex gap-4 my-4">
                            <div className="flex flex-col sm:flex-row gap-4 my-4 px-2">
                                {/* Avatar */}
                                <div className="w-12 h-12 flex-shrink-0">
                                    <img
                                        className="w-full h-full rounded-full object-cover"
                                        src="https://marketplace.canva.com/EAFuecoEOf4/6/0/1600w/canva-orange-and-black-illustrated-gaming-logo-youtube-profile-picture-bFxTLOfTXSs.jpg"
                                        alt="profile-picture"
                                    />
                                </div>

                                {/* Comment content */}
                                <div className="flex flex-col w-full">
                                    <h1 className="text-gray-700 font-semibold text-sm">@Username</h1>
                                    <p className="text-gray-700 text-sm">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perferendis,
                                        sapiente iusto eaque Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        Tempora, mollitia. Inventore quod atque animi eveniet eos. Nobis.
                                    </p>

                                    {/* Like/Dislike */}
                                    <div className="flex gap-2 my-2">
                                        <button className="flex gap-1 items-center text-sm px-3 py-1 hover:bg-gray-300 rounded-3xl duration-200">
                                            <SlLike size={16} /> 0
                                        </button>
                                        <button className="p-2 hover:bg-gray-300 rounded-3xl duration-200">
                                            <SlDislike size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedVideos />
            </div>
        </>
    )
}