import api from "./api";

export const getComments = async (videoId) => {
    try {
        const res = await api.get(`/comments/${videoId}`)

        return res.data;
    } catch (error) {
        console.error("Error fetching comments:", error);
        throw error.response?.data || { message: "Something went wrong" };
    }
}


export const addCommentToVideo = async (videoId, text, token) => {
    try {
        const res = await api.post(`/comments/${videoId}`, { text }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return res.data;
    } catch (error) {
        console.error("Error adding comment:", error);
        throw error.response?.data || { message: "Something went wrong" };
    }
}


export const deleteCommentOfVideo = async (commentId, token) => {
    try {
        const res = await api.delete(`/comments/${commentId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return res.data
    } catch (error) {
        console.error("Error deleting comment:", error);
        throw error.response?.data || { message: "Something went wrong" };
    }
}

export const editCommentOfVideo = async (commentId, text, token) => {
    try {
        const res = await api.put(`/comments/${commentId}`, { text }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return res.data
    } catch (error) {
        console.error("Error updating comment:", error);
        throw error.response?.data || { message: "Something went wrong" };
    }
}