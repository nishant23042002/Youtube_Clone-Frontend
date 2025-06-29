import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


export const UploadVideo = () => {
    const { channelId } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        uploader: "", // Set from logged-in user (optional)
        thumbnailduration: "",
        uploadDate: new Date().toISOString().slice(0, 10), // today's date
    });

    const [thumbnail, setThumbnail] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = new FormData();
        payload.append("title", formData.title);
        payload.append("description", formData.description);
        payload.append("thumbnailduration", formData.thumbnailduration);
        payload.append("uploadDate", formData.uploadDate);
        payload.append("channelId", channelId);
        payload.append("uploader", formData.uploader); // If you have user info in context/state

        if (thumbnail) payload.append("thumbnail", thumbnail);
        if (videoFile) payload.append("videoFile", videoFile);

        try {
            const res = await axios.post("http://localhost:4001/api/v1/videos/", payload, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            if (res.status === 201) {
                alert("Video uploaded successfully!");
                navigate(`/channel/${channelId}`);
            }
        } catch (err) {
            console.error(err);
            alert("Video upload failed!");
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Upload New Video</h2>
            <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
                <input type="text" name="title" placeholder="Title" onChange={handleChange} required className="w-full p-2 border" />
                <textarea name="description" placeholder="Description" onChange={handleChange} required className="w-full p-2 border" />
                <input type="text" name="thumbnailduration" placeholder="Duration (e.g. 10:05)" onChange={handleChange} required className="w-full p-2 border" />
                <input placeholder="channel profile picture" type="file" name="thumbnail" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} required /><br/>
                <input placeholder="video" type="file" name="videoFile" accept="video/*" onChange={(e) => setVideoFile(e.target.files[0])} required />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Upload</button>
            </form>
        </div>
    );
};
