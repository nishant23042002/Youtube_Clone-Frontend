import api from "./api.js";

export const registerUser = async ({ name, email, password, profilePic }) => {
    try {
        const formData = new FormData();
        formData.append("userName", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("profilePicture", profilePic);

        const response = await api.post("/user/register", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        throw new Error(
            error.response?.data?.message || "Registration failed"
        );
    }
}

export const loginUser = async ({ email, password }) => {
    try {
        const response = await api.post(`/user/login`, {
            email,
            password
        });

        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || "Login failed");
    }
};