import { useOutletContext } from "react-router-dom"

export const Body = () => {
    const { isOpen } = useOutletContext();

    return (
        <div className="flex justify-center items-center">
            <div className="w-full flex border border-gray-300 justify-center flex-col items-center p-4 rounded-xl shadow-xl">
                <h1 className="text-center text-2xl font-bold mb-4">Try searching to get started</h1>
                <p className="text-center text-gray-600">Start watching videos to help us build a feed of videos you'll love.</p>
            </div>
            {
                isOpen && (
                    <div>
                        <p>Hello</p>
                    </div>
                )
            }
        </div>
    )
}