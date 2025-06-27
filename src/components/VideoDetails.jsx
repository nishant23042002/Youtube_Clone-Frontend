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
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [newComment, setNewComment] = useState("");


    const toggleLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(prev => prev - 1);
        } else {
            setLiked(true);
            setLikeCount(prev => prev + 1);
        }
    };

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
    const getCommentsOfVideos = async () => {
        try {
            let response = await fetch(`http://localhost:4001/api/v1/comments/${id}`)
            const data = await response.json()
            setComments(data.allUserComments)
            console.log(data);
        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        getVideo();
        getCommentsOfVideos();

    }, [id])

    const handleAddComment = async () => {
        
    }

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
                                <div onClick={toggleLike} className="flex items-center hover:bg-gray-300 rounded-l-3xl justify-center gap-3 p-3 cursor-pointer duration-300 border-r-1 border-gray-300"><SlLike size={"20px"} />{likeCount}</div>
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
                    <div className="mt-6">
                        <h1 className="font-bold text-xl mb-4">{comments.length} Comments</h1>
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src="" alt="profile" />
                            <div className="w-full mr-4">
                                <div onClick={() => setShowCommentInput(true)}>
                                    <h1 className="text-md font-semibold text-gray-600 border-b-2">Comment Section</h1>
                                </div>
                                {showCommentInput && (
                                    <div>
                                        <input
                                        type="text"
                                            className="w-full p-3 text-xl outline-none"
                                            placeholder="Write a comment"
                                            value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}
                                        />
                                        <div className="flex justify-end gap-4 mt-2">
                                            <button onClick={() => setShowCommentInput(false)} className="p-2 px-4 rounded-3xl hover:bg-gray-200">Cancel</button>
                                            <button onClick={handleAddComment} className="p-2 px-4 bg-gray-200 hover:bg-gray-300 rounded-3xl">Add Comment</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>



                        {comments.map((comment) => (
                            <div key={comment._id} className="flex gap-4 mt-6">
                                <img className="w-12 h-12 rounded-full" src={comment?.userId?.profilePicture} alt="avatar" />
                                <div className="flex flex-col">
                                    <h1 className="text-sm font-semibold text-gray-700">@{comment?.userId?.userName}</h1>
                                    <p className="text-sm text-gray-700">{comment?.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <RelatedVideos />
            </div>
        </>
    )
}