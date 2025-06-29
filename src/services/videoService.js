import api from "./api.js";

export const fetchAllVideos = async () => {
    const res = await api.get("/videos/");
    return res.data;
};



export const deleteVideo = async (videoId) => {
  const res = await api.delete(`/videos/${videoId}`);
  return res.data;
};