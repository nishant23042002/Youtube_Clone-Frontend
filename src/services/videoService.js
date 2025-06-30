import api from "./api.js";

export const fetchAllVideos = async () => {
  const res = await api.get("/videos/");
  return res.data;
};



export const uploadVideoOnChannel = async (formData, token) => {
  try {
    const res = await api.post("/videos", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      }
    });

    return res.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to upload video"
    );
  }
}


export const getVideoDetailsById = async (id) => {
  try {
    const response = await api.get(`/videos/${id}`);
    return response.data;
  } catch (err) {
    throw err.response?.data || new Error("Failed to fetch video");
  }
}

export const deleteVideo = async (videoId) => {
  const res = await api.delete(`/videos/${videoId}`);
  return res.data;
};