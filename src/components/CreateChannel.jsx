import { useState } from "react";
import axios from "axios";

export const CreateChannelForm = ({ userId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api/channels", {
        name,
        description,
        owner: userId,
        profilePicture,
      });

      if (res.status === 201) {
        setMessage("Channel created successfully!");
        setName("");
        setDescription("");
        setProfilePicture("");
      }
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to create channel");
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-center">Create Your Channel</h2>
      {message && <p className="text-center text-sm mb-2 text-red-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
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
            type="text"
            className="w-full border px-3 py-2 rounded"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
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
