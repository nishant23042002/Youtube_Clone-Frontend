import { useState } from "react";
import { uploadVideoOnChannel } from "../services/videoService.js";

export const UploadVideo = ({ onSuccess, channelId }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [videoFileUrl, setVideoFileUrl] = useState(null);
    const [thumbnail, setThumbnail] = useState(null);
    const [thumbnailduration, setThumbnailDuration] = useState("");


    const user = JSON.parse(localStorage.getItem("user"));
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("thumbnailduration", thumbnailduration);
        formData.append("channelId", channelId);
        formData.append("uploader", user?.id);
        formData.append("videoFile", videoFileUrl);
        formData.append("thumbnail", thumbnail);

        try {
            const token = localStorage.getItem("token");
            const data = await uploadVideoOnChannel(formData, token);
            onSuccess(data.video);
        } catch (error) {
            console.error("Upload failed:", error.response?.data || error.message);
        }
    };


    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input className="w-full bg-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required  />
            <textarea className="w-full bg-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input className="w-full bg-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" placeholder="Duration" value={thumbnailduration} onChange={(e) => setThumbnailDuration(e.target.value)} required />
            <input className="w-full bg-blue-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Video Url" type="text" onChange={(e) => setVideoFileUrl(e.target.value)} required />
            <div className="p-2">
                <label htmlFor="img">Video Thumbnail</label>
                <input className="w-full text-sm text-gray-600 bg-blue-300 p-2 rounded-lg
          file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
          file:bg-blue-50 file:text-blue-700
          hover:file:bg-blue-100 cursor-pointer" type="file" id="img" name="img" accept="image/*" onChange={(e) => setThumbnail(e.target.files[0])} required />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-green-600 text-white px-4 py-2 rounded w-full items-center cursor-pointer">
                Upload
            </button>
        </form>
    );
};

