import api from "./api.js";

export const fetchAllVideos = async () => {
    const res = await api.get("/videos/");
    return res.data;
};


