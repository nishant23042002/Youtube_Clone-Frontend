import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { fetchAllVideos } from "../services/videoService.js";
import { formatDistanceToNow } from "date-fns";
import { useSlider } from "../context/sliderContext.jsx";





export const Videos = () => {
    const [videos, setVideos] = useState([]);
    const location = useLocation();
    const searchResults = location.state?.searchResults;
    const { isSliderOpen } = useSlider();


    useEffect(() => {
        const getVideos = async () => {
            try {
                if (searchResults && Array.isArray(searchResults)) {
                    setVideos(searchResults);
                } else {
                    const data = await fetchAllVideos();
                    setVideos(data.videos);
                }
            } catch (err) {
                console.error("Error loading videos:", err);
            }
        }
        getVideos();
    }, [searchResults])


    if (videos.length == 0) {
        return (
            <div className="flex justify-center items-center">
                <h1 className="text-2xl font-bold">No videos</h1>
            </div>
        )
    }


    function formatViews(num) {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num.toString();
    }

    return (
        <div className={`${isSliderOpen ? "w-[90%] max-[700px]:mx-auto  flex flex-wrap  justify-end items-center gap-4 my-12 mx-20" : "w-[90%] max-[700px]:mx-auto  flex flex-wrap  justify-start items-center gap-4 my-12 mx-20"}`}>
            {
                videos.map((video) => {
                    return (
                        <Link key={video._id} to={`/video/${video._id}`}>
                            <div className="max-sm:w-78 w-88 min-h-80 p-1 rounded-2xl shadow-xl border border-gray-200 cursor-pointer">
                                <div className="flex justify-center items-center">
                                    <img className="rounded-2xl" src={video?.thumbnail} alt="thumbnail" />
                                </div>
                                <div className="flex gap-2 my-3">
                                    <div>
                                        <img className="w-15 rounded-full" src={video?.channelId?.profilePicture || "https://via.placeholder.com/40"} alt="channel-profile" />
                                    </div>
                                    <div className="w-full px-2">
                                        <h1 className="font-semibold">{video?.title}</h1>
                                        <h3 className="text-gray-600">{video?.channelId?.name || "Unknown Channel"}</h3>
                                        <span className="text-gray-600">{formatViews(video?.views)} views</span> ● <span className="text-gray-600">{formatDistanceToNow(new Date(video?.uploadDate), { addSuffix: true })}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}