import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { deleteVideo } from "../services/videoService.js";
import { CiMenuKebab } from "react-icons/ci";

export const ChannelInfo = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [channelInfo, setChannelInfo] = useState(null);
    const [openMenu, setOpenMenu] = useState(true);
    const [videos, setVideos] = useState([]);
    let { id } = useParams();


    useEffect(() => {
        const fetchChannelAndVideos = async () => {
            try {
                const res1 = await fetch(`http://localhost:4001/api/v1/channels/${id}`);
                const data1 = await res1.json();
                setChannelInfo(data1.channelById);

                const res2 = await fetch(`http://localhost:4001/api/v1/channels/${id}/videos`);
                const data2 = await res2.json();
                setVideos(data2.videos);
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
            alert("Failed to delete video");
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
                                    className="w-full object-cover h-34 rounded-xl"
                                    src="https://q5n8c8q9.delivery.rocketcdn.me/wp-content/uploads/2019/07/YouTube-Banner-Size-and-Dimensions-Guide.png"
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
                                        <h3 className="font-bold text-xl sm:text-2xl">{channelInfo.name}</h3>

                                        <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
                                            <span className="font-semibold text-black">@{channelInfo.name}</span>
                                            <span>• 16.7 lakh subscribers</span>
                                            <span>• Total Videos: {videos.length}</span>
                                        </div>

                                        <div className="mt-2 text-sm leading-relaxed">
                                            <p className="inline text-gray-500">
                                                {/*description*/}
                                                {!isExpanded
                                                    ? channelInfo.description
                                                    : channelInfo.description}
                                            </p>
                                            <span
                                                className="ml-1 text-blue-600 cursor-pointer"
                                                onClick={() => setIsExpanded((prev) => !prev)}
                                            >
                                                {isExpanded ? "...less" : "...more"}
                                            </span>
                                        </div>

                                        <button className="mt-4 px-4 py-2 bg-black text-white font-semibold rounded-full cursor-pointer">
                                            Subscribe
                                        </button>
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
                                                    <button className="bg-red-500 px-3 py-1 text-white rounded" onClick={() => handleDelete(video._id)}>
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
