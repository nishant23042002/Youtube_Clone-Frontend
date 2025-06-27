import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { fetchAllVideos } from "../services/videoService.js";
import { formatDistanceToNow } from "date-fns";




export const Videos = () => {
    const [videos, setVideos] = useState([]);


    useEffect(() => {
        const getVideos = async () => {
            try {
                const data = await fetchAllVideos();
                setVideos(data.videos)
                console.log(data);
            } catch (err) {
                console.log(err);
            } finally {
                console.log("Success");
            }
        }
        getVideos();
    }, [])


    function formatViews(num) {
        if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
        if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
        if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
        return num.toString();
    }
    return (
        <div className="w-[90%] max-[700px]:mx-auto  flex flex-wrap justify-end items-center gap-4 my-12 mx-20">
            {
                videos.map((video) => {
                    return (
                        <Link key={video._id} to={`${video._id}`}>
                            <div className="max-sm:w-78 w-88 h-85 p-1 rounded-2xl shadow-xl border border-gray-200 cursor-pointer">
                                <div className="">
                                    <img className="rounded-2xl" src={video.thumbnail} alt="thumbnail" />
                                </div>
                                <div className="flex gap-2 my-3">
                                    <div>
                                        <img className="w-15 rounded-full" src={video.channelId?.profilePicture || "https://via.placeholder.com/40"} alt="channel-profile" />
                                    </div>
                                    <div className="w-full px-2">
                                        <h1 className="font-semibold">{video.title}</h1>
                                        <h3 className="text-gray-600">{video.channelId?.name || "Unknown Channel"}</h3>
                                        <span className="text-gray-600">{formatViews(video.views)}</span> ● <span className="text-gray-600">{formatDistanceToNow(new Date(video.uploadDate), { addSuffix: true })}</span>
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