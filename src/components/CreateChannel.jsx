import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setChannel } from "../redux/authSlice.js";
import { useNavigate } from "react-router-dom";
import { createChannel } from "../services/channelService.js";


export const CreateChannelForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [channelProfile, setChannelProfile] = useState("");
    const [message, setMessage] = useState("")
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = user?.id;
    if (!user) {
        return <p className="text-center mt-10 text-red-600">You must be logged in to create a channel.</p>;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("name", name);
            formData.append("description", description);
            formData.append("profilePicture", channelProfile);
            formData.append("owner", userId);

            const data = await createChannel(formData, token);

            setMessage(data.message);

            if (data.channel) {
                dispatch(setChannel(data.channel));
                navigate(`/channelinfo/${data.channel._id}`);
            }
        }
        catch (err) {
            console.error("Error creating channel:", err.response?.data?.message || err.message);
            setMessage(err.response?.data?.message || "Something went wrong");
        }
    }

    return (
        <div className="max-w-md mx-auto p-6 rounded-2xl shadow-lg bg-blue-100 space-y-4">
            {message && (
                <div className="text-center text-sm text-red-500 font-medium">{message}</div>
            )}
            <h2 className="text-2xl font-bold text-center text-gray-800">Create Your Channel</h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5"
                encType="multipart/form-data"
            >
                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Channel Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full bg-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. TechInformer"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Description
                    </label>
                    <textarea
                        rows={3}
                        className="w-full bg-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Tell viewers what your channel is about"
                    />
                </div>

                <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Profile Picture <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="file"
                        name="profilePicture"
                        id="profilePicture"
                        accept="image/*"
                        required
                        className="w-full text-sm text-gray-600 bg-blue-300 p-2 rounded-lg file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
                        onChange={(e) => setChannelProfile(e.target.files[0])}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full hover:bg-green-500  bg-blue-600 text-white font-semibold py-2.5 rounded-lg cursor-pointer transition duration-300"
                >
                    Create Channel
                </button>
            </form>
        </div>

    );
};
