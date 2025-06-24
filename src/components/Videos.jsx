import { Link } from "react-router-dom"

export const Videos = () => {
    return (
        <>
            <div className="w-[90%] flex flex-wrap items-center gap-4 my-2">
                <Link to={"/video/:id"}>
                    <div className="max-sm:w-78 w-88 h-auto p-1 rounded-2xl shadow-xl border border-gray-200 cursor-pointer">
                        <div className="">
                            <img className="rounded-2xl" src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="thumbnail" />
                        </div>
                        <div className="flex gap-2 my-3">
                            <div>
                                <img className="w-15 rounded-full" src="https://marketplace.canva.com/EAFuecoEOf4/6/0/1600w/canva-orange-and-black-illustrated-gaming-logo-youtube-profile-picture-bFxTLOfTXSs.jpg" alt="profile-picture" />
                            </div>
                            <div className="w-full px-2">
                                <h1 className="font-semibold">Lorem ipsum dolor sit.</h1>
                                <h3 className="text-gray-600">channel name</h3>
                                <span className="text-gray-600">500k views</span> ● <span className="text-gray-600">2 months ago</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}