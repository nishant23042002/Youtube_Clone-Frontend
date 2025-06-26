import { useState } from "react";

export const ChannelInfo = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ipsa earum commodi? Iusto unde id ex quas nemo nostrum architecto!";

    return (
        <div className="flex flex-col justify-center items-center my-4 px-4">
            <div className="w-full max-w-4xl rounded-xl overflow-hidden">
                <div className="w-full">
                    <img
                        className="w-full object-cover h-34 rounded-xl"
                        src="https://yt3.googleusercontent.com/Bdd1U2n9gAgNecso_MQU0Ywn_UbR-Pm6zxnxCzC0GQVe3LAOrmtQliRAgQwPz5KBVVGY7PyVnvo=w1060-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
                        alt="cover-pic"
                    />
                </div>

                <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                        <div className="flex-shrink-0">
                            <img
                                className="w-30 h-30 rounded-full object-cover"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThHNq8ep4HGd3CodlulY5slCGq58kJTKA6qA&s"
                                alt="channel-profile"
                            />
                        </div>

                        <div className="flex-grow">
                            <h3 className="font-bold text-xl sm:text-2xl">Channel Name</h3>

                            <div className="flex flex-wrap gap-2 text-sm text-gray-600 mt-1">
                                <span className="font-semibold text-black">@channelname</span>
                                <span>• 16.7 lakh subscribers</span>
                                <span>• 150 videos</span>
                            </div>

                            <div className="mt-2 text-sm leading-relaxed">
                                <p className="inline text-gray-500">
                                    {!isExpanded
                                        ? "Lorem ipsum dolor sit amet consectetur adipisicing elit"
                                        : text}
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
                <div className="max-sm:w-78 w-70  p-1 rounded-2xl cursor-pointer mb-4">
                    <div>
                        <img className="rounded-xl" src="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/1600w/canva-most-attractive-youtube-thumbnail-wK95f3XNRaM.jpg" alt="thumbnail" />
                    </div>
                    <div className="flex gap-2">
                        <div className="w-full px-2">
                            <p className="font-semibold w-full text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, impedit?</p>
                            <div className="my-2">
                                <span className="text-gray-700 font-light text-sm">10k views • </span><span className="text-gray-700 font-light text-sm">12 month ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
