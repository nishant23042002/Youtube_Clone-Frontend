import { SlLike } from "react-icons/sl";
import { SlDislike } from "react-icons/sl";
import { PiShareFat } from "react-icons/pi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RelatedVideos } from "./RelatedVideos";
import { useParams } from "react-router-dom";
import { getVideoDetailsById } from "../services/videoService.js";
import { addCommentToVideo, deleteCommentOfVideo, editCommentOfVideo, getComments } from "../services/commentService.js";

export const VideoDetails = () => {
    const { id } = useParams();
    const [videoInfo, setVideo] = useState(null);
    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedText, setEditedText] = useState("");
    const [message, setMessage] = useState("")


    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.getItem("user"));

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
            const data = await getVideoDetailsById(id)

            setVideo(data.video);
        } catch (err) {
            console.error("Error fetching video:", err);
        }
    };


    const getCommentsOfVideos = async () => {
        try {
            //here id means the videoId 
            const data = await getComments(id)
            setComments(data.allUserComments)
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
        try {
            const response = await addCommentToVideo(id, newComment, token);
            if (response?.comment) {
                setNewComment("");
                setMessage(response.message)
                setShowCommentInput(false);
                getCommentsOfVideos();
            }
        } catch (err) {
            alert(err.message || "Failed to add comment");
        }
    }

    const handleDeleteComment = async (commentId) => {
        try {
            const res = await deleteCommentOfVideo(commentId, token)
            setComments((prev) => prev.filter((c) => c._id !== commentId));
            setMessage(res.message)

        } catch (err) {
            console.error("Delete comment error:", err);
            alert("Something went wrong");
        }
    }

    const handleEditComment = async (commentId) => {
        if (!editedText.trim()) return;

        try {
            const response = await editCommentOfVideo(commentId, editedText, token);
            setComments((prev) =>
                prev.map((c) =>
                    c._id === commentId ? { ...c, text: editedText } : c
                )
            );
            setEditingCommentId(null);
            setMessage(response.message)
            setEditedText("");
        } catch (err) {
            alert(err.message || "Failed to update comment");
        }
    };


    return (
        <>
            <div className="flex max-xl:flex-col mt-8">
                {/* Left section */}
                <div className="rounded-2xl mx-6 max-xl:w-auto w-300">
                    {/* Video and title */}
                    <div className="flex flex-col rounded-2xl">
                        <video src={videoInfo?.videoFile} controls autoPlay></video>
                        <h1 className="font-bold my-2">{videoInfo?.title}</h1>
                    </div>


                    {/* video-info section */}
                    <div className="flex justify-between items-center gap-3 mb-2">
                        <div className="flex justify-center items-center max-md:hidden">
                            <div className="mr-4 w-15 max-lg:w-10">
                                <img className="rounded-full" src={videoInfo?.channelId?.profilePicture} alt="profile-picture" />
                            </div>
                            <div className="mr-5">
                                <h3 className="flex items-center gap-2 font-semibold w-42">{videoInfo?.channelId?.name || "unknown user"} <span><IoCheckmarkDoneCircleSharp color="gray" /></span></h3>
                                <span className="text-gray-500 text-sm font-semibold">3M subscribers</span>
                            </div>
                            <div>
                                <button className="px-3 rounded-3xl text-white bg-black font-semibold h-10 cursor-pointer">Subscribe</button>
                            </div>
                        </div>

                        {/* like-dislike section */}
                        <div className="flex gap-3 max-md:hidden">
                            <div className="bg-gray-200 flex justify-center items-center rounded-3xl">
                                <div onClick={toggleLike} className={`${liked ? "flex items-center hover:bg-gray-300 rounded-l-3xl justify-center gap-3 p-3 cursor-pointer duration-300 border-r-1 text-white bg-gray-600" : "flex items-center hover:bg-gray-300 rounded-l-3xl justify-center gap-3 p-3 cursor-pointer duration-300 border-r-1 border-gray-300"}`}><SlLike size={"20px"} />{likeCount}</div>
                                <div className="hover:bg-gray-300  rounded-r-3xl p-3.5 cursor-pointer duration-300"><SlDislike size={"20px"} /></div>
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
                                    {videoInfo?.channelId?.name || "unknown User"} <IoCheckmarkDoneCircleSharp className="text-gray-500" size={14} />
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

                    <div className="bg-gray-300 rounded-md p-2 w-full">
                        <h1>Description: {videoInfo?.description}</h1>
                    </div>

                    {/* Add comments */}
                    <div className="my-6">
                        <div className="flex justify-center flex-col items-center">
                            <h1 className="font-bold text-xl mb-4">{comments?.length} Comments</h1>
                            <span className={`${message === "Comment deleted successfully" ? "text-red-600" : "text-green-600"}`}>{message}</span>
                        </div>
                        <div className="flex gap-4">
                            <img className="w-12 h-12 rounded-full" src={user?.profilePic} alt="profile" />
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
                                            <button onClick={() => setShowCommentInput(false)} className="p-2 px-4 rounded-3xl font-semibold hover:bg-gray-200 cursor-pointer">Cancel</button>
                                            <button onClick={handleAddComment} className="p-2 px-4 bg-gray-200 hover:text-white font-semibold hover:bg-gray-600 rounded-3xl cursor-pointer">Add Comment</button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>



                        {comments.map((comment) => {
                            const isOwner = comment.userId?._id === user?.id;
                            const isEditing = editingCommentId === comment._id;

                            return (
                                <div key={comment._id} className="flex gap-4 my-6">
                                    <img className="w-12 h-12 rounded-full" src={comment?.userId?.profilePicture} alt="avatar" />
                                    <div className="flex flex-col w-full">
                                        <div className="flex justify-between">
                                            <h1 className="text-sm font-semibold text-gray-700">@{comment?.userId?.userName}</h1>
                                            {isOwner && (
                                                <div className="flex gap-2">
                                                    <button
                                                        onClick={() => {
                                                            setEditingCommentId(comment._id);
                                                            setEditedText(comment.text);
                                                        }}
                                                        className="text-sm hover:underline py-2 px-5 font-semibold bg-yellow-400 rounded-2xl cursor-pointer text-white"
                                                    >
                                                        Edit
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteComment(comment._id)}
                                                        className="text-sm hover:underline py-1.5 px-3 bg-red-500 font-semibold cursor-pointer text-white rounded-2xl"
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            )}
                                        </div>

                                        {isEditing ? (
                                            <>
                                                <textarea
                                                    className="border p-2 mt-1 rounded w-full text-sm"
                                                    value={editedText}
                                                    onChange={(e) => setEditedText(e.target.value)}
                                                />
                                                <div className="flex justify-end gap-2 mt-1">
                                                    <button
                                                        onClick={() => setEditingCommentId(null)}
                                                        className="text-sm hover:underline py-1.5 px-3 bg-red-500 font-semibold cursor-pointer text-white rounded-2xl"
                                                    >
                                                        Cancel
                                                    </button>
                                                    <button
                                                        onClick={() => handleEditComment(comment._id)}
                                                        className="text-sm rounded-2xl cursor-pointer font-semibold py-1.5 font-semibold px-3 bg-green-500 text-white"
                                                    >
                                                        Save
                                                    </button>
                                                </div>
                                            </>
                                        ) : (
                                            <p className="text-sm text-gray-700">{comment.text}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}

                    </div>
                </div>

                <RelatedVideos />
            </div>
        </>
    )
}