import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteVideo } from "../services/videoService.js";
import { CiMenuKebab } from "react-icons/ci";
import { UploadVideo } from "./UploadVideo.jsx";
import { getChannelById, getChannelVideos } from "../services/channelService.js";


export const ChannelInfo = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [channelInfo, setChannelInfo] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [videos, setVideos] = useState([]);
    const [showUploadModal, setShowUploadModal] = useState(false);
    let { id } = useParams();


    useEffect(() => {
        const fetchChannelAndVideos = async () => {
            try {
                const channel = await getChannelById(id)
                setChannelInfo(channel);

                const videosList = await getChannelVideos(id)
                setVideos(videosList);

            } catch (err) {
                console.error("Error:", err.message);
            }
        };
        fetchChannelAndVideos();
    }, [id]);

    const handleDelete = async (videoId) => {
        try {
            await deleteVideo(videoId);
            setVideos((prev) => prev.filter((vid) => vid._id !== videoId));
        } catch (err) {
            console.error("Delete failed", err);
        }
    };




    return (
        <div className="flex flex-col justify-center items-center my-4 px-4">
            {
                channelInfo && (
                    <>
                        <div className="w-full max-w-4xl rounded-xl overflow-hidden">
                            <div className="w-full">
                                <img
                                    className="w-full object-contain h-34 rounded-xl"
                                    src={channelInfo?.profilePicture}
                                    alt="cover-pic"
                                />
                            </div>

                            <div className="p-4 border-t border-gray-200 bg-white">
                                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="w-30 h-30 rounded-full object-cover"
                                            src={channelInfo.profilePicture}
                                            alt="channel-profile"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <h3 className="font-bold text-xl sm:text-2xl">{channelInfo?.name}</h3>

                                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
                                            <span className="font-semibold text-black">@{channelInfo.name}</span>
                                            <span>• 16.7 lakh subscribers</span>
                                            <span>• Total Videos: {videos?.length}</span>
                                        </div>

                                        <div className="mt-2 text-sm leading-relaxed">
                                            <p className="inline text-gray-500">

                                                {!isExpanded
                                                    ? channelInfo?.description
                                                    : channelInfo?.description}
                                            </p>
                                            <span
                                                className="ml-1 text-blue-600 cursor-pointer"
                                                onClick={() => setIsExpanded((prev) => !prev)}
                                            >
                                                {isExpanded ? "...less" : "...more"}
                                            </span>
                                        </div>

                                        <div className="flex justify-start items-center">
                                            <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-full cursor-pointer">
                                                Subscribe
                                            </button>
                                            <div className="flex justify-end items-center my-4 w-full max-w-4xl">
                                                <button
                                                    onClick={() => setShowUploadModal(true)}
                                                    className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-green-700 cursor-pointer"
                                                >
                                                    Upload Video
                                                </button>
                                            </div>
                                        </div>
                                        {showUploadModal && (
                                            <div className="fixed inset-0 bg-white bg-opacity-40 flex justify-center items-center z-50">
                                                <div className=" p-6 rounded-lg max-w-md w-full relative bg-blue-200">
                                                    <button
                                                        className="absolute top-2 right-2 text-gray-500 cursor-pointer"
                                                        onClick={() => setShowUploadModal(false)}
                                                    >
                                                        ✕
                                                    </button>
                                                    <button className="text-lg font-semibold mb-4 cursor-pointer">Upload Video</button>
                                                    <UploadVideo onSuccess={(newVideo) => {
                                                        setVideos(prev => [newVideo, ...prev]);
                                                        setShowUploadModal(false);
                                                    }} channelId={channelInfo._id} />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border border-gray-300">

                        </div>

                        <div className="flex justify-center items-start flex-wrap max-w-4xl pt-9">
                            {videos.length === 0 ? (
                                <p className="text-gray-600">No videos uploaded yet.</p>
                            ) : (
                                videos.map((video) => (
                                    <div key={video._id} className="max-sm:w-78 w-70 p-1 rounded-2xl cursor-pointer mb-4">
                                        <div>
                                            <img
                                                className="rounded-xl w-full h-40 object-cover"
                                                src={video.thumbnail}
                                                alt="thumbnail"
                                            />
                                        </div>
                                        <div className="flex gap-2">
                                            <div className="w-full px-2">
                                                <p className="font-semibold w-full text-[15px]">{video.title}</p>
                                                <div className="my-2 text-sm text-gray-700">
                                                    <span>{video.views} views • </span>
                                                    <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
                                                </div>
                                            </div>
                                            <div onClick={() => setOpenMenu((prev) => !prev)}>
                                                <CiMenuKebab className="mt-2" size={20} />
                                            </div>
                                        </div>
                                        {
                                            openMenu && (
                                                <div className="flex justify-end gap-3 mt-3">
                                                    <button className="rounded-xl px-3 py-1 text-white bg-red-600 hover:bg-green-600 cursor-pointer" onClick={() => handleDelete(video._id)}>
                                                        Delete
                                                    </button>
                                                </div>
                                            )
                                        }
                                    </div>
                                ))
                            )}
                        </div>
                    </>
                )
            }
        </div>
    );
};
