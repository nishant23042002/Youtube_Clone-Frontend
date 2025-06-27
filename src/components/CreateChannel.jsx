import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const CreateChannelForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [channelProfile, setChannelProfile] = useState("");
    const [message, setMessage] = useState("")
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
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


            let response = await fetch("http://localhost:4001/api/v1/channels/", {
                method: "POST",
                body: formData,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            const data = await response.json();
            console.log(data);
            setMessage(data.message);
            if (response.ok) {
                navigate(`/channelinfo/${data.channel._id}`);
            } else {
                console.error("Channel creation failed:", data.message);
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="max-w-md mx-auto p-4 border rounded shadow-md">
            <h1>{message}</h1>
            <h2 className="text-xl font-semibold mb-4 text-center">Create Your Channel</h2>
            {/* {message && <p className="text-center text-sm mb-2 text-red-500">{message}</p>} */}
            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <div>
                    <label className="block font-medium mb-1">Channel Name</label>
                    <input
                        type="text"
                        className="w-full border px-3 py-2 rounded"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium mb-1">Description</label>
                    <textarea
                        className="w-full border px-3 py-2 rounded"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div>
                    <label className="block font-medium mb-1">Profile Picture URL</label>
                    <input
                        type="file"
                        name="profilePicture"
                        id="profilePicture"
                        accept="image/*"
                        required
                        className="w-full p-2 rounded-md bg-white text-gray-400 file:border-none file:mr-2 file:cursor-pointer outline-none"
                        onChange={(e) => setChannelProfile(e.target.files[0])}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    Create Channel
                </button>
            </form>
        </div>
    );
};
