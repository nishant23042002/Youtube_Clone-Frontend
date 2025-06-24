import { useState } from "react"
import { Videos } from "./Videos";

export const Body = () => {
    const [isLogin, setIsLogin] = useState(false);

    function handleStatus() {
        setIsLogin(false)
    }

    return (
        <>
            <div onClick={handleStatus}>
                {
                    isLogin && (
                        <div className="flex justify-center items-center">
                            <div className="w-full flex border border-gray-300 justify-center flex-col items-center p-4 rounded-xl shadow-xl">
                                <h1 className="text-center text-2xl font-bold mb-4">Try searching to get started</h1>
                                <p className="text-center text-gray-600">Start watching videos to help us build a feed of videos you'll love.</p>
                            </div>
                        </div>
                    )
                }
            </div>

            <div className="border-2 border-blue-700 flex justify-end">
                <Videos />
            </div>
        </>
    )
}