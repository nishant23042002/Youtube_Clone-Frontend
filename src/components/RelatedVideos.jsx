import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { Link } from "react-router-dom";
import { fetchAllVideos } from "../services/videoService.js";

export const RelatedVideos = () => {
    const [relatedVideos, setRelatedVideos] = useState([]);

    useEffect(() => {
        const related = async () => {
            let data = await fetchAllVideos();
            const allVideos = data.videos
            const filtered = allVideos.slice(0, 5)
            setRelatedVideos(filtered);
        }

        related();
    }, [])

    return (
        <>
            <div className="flex flex-col gap-3 mx-8">
                {
                    relatedVideos.map((video) => {
                        return (  
                            <Link key={video?._id} to={`/video/${video?._id}`}>
                                    <div className="w-110 max-sm:w-full min-h-40 flex gap-3 p-2 justify-center border border-gray-300 shadow-md rounded-xl mb-4">
                                        <div className="w-55 max-[460px]:h-34">
                                            <img className="rounded-lg" src={video?.thumbnail} alt="thumbnail" />
                                        </div>
                                        <div>
                                            <h1 className="mb-2 max-[520px]:text-[20px] max-[420px]:text-[15px] font-semibold text-2xl">{video?.title}</h1>
                                            <h3 className="flex max-[520px]:text-[15px] max-[420px]:text-[12px] items-center text-gray-700 gap-2 font-semibold">{video?.channelId?.name || "Unknow user"} <span><IoCheckmarkDoneCircleSharp color="gray" /></span></h3>
                                            <span className="max-[520px]:text-[12px]">{video?.views} views ● </span><span className="max-[520px]:text-[12px]">{formatDistanceToNow(new Date(video?.uploadDate), { addSuffix: true })}</span>
                                        </div>
                                        <div>
                                            <button className="cursor-pointer">
                                                <CiMenuKebab size={"20px"} />
                                            </button>
                                        </div>
                                    </div>
                            </Link>              
                        )
                    })
                }
            </div>
        </>
    )
}