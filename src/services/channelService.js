import api from "./api.js"


export const getChannelById = async (channelId) => {
    const response = await api.get(`/channels/${channelId}`);
    return response.data.channelById;
};

export const getChannelVideos = async (channelId) => {
    const response = await api.get(`/channels/${channelId}/videos`);
    return response.data.videos;
};

export const createChannel = async (formData, token) => {
    const response = await api.post(`/channels/`, formData, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
        },
    });
    return response.data;
}

export const getUserChannel = async (userId) => {
    const response = await api.get(`/channels/user/${userId}`);
    return response.data.channel;
}