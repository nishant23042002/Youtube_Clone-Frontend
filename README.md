# 🎥 YouTube Clone – MERN Stack Capstone Project

A full-stack **YouTube Clone** built using **MongoDB, Express.js, React, and Node.js (MERN)**. This project allows users to watch, upload, and interact with videos—just like on YouTube. It includes authentication, channel creation, video upload, comments, search, and more.


### GithHub Link - 
- Youtube-Clone-Frontend - https://github.com/nishant23042002/Youtube_Clone-Frontend
- Youtube-Clone-Backend - https://github.com/nishant23042002/Youtube_Clone-Backend
---

## 🚀 Features

### 🔸 Frontend (React + Redux Toolkit)
- ✅ YouTube-style homepage with:
  - Header, toggleable sidebar, filter buttons
  - Video cards showing thumbnail, title, channel, and views[static]
- ✅ Authentication system with:
  - User registration and login using JWT
  - Conditional UI (e.g., Sign In button vs Username/Avatar)
- ✅ Video Player page:
  - Watch video and comment [videos are just randomly taken so please ignore]
- ✅ Channel page:
  - Create your own channel
  - Upload and delete videos
- ✅ Search filter on homepage
- ✅ Fully responsive layout for mobile, tablet, and desktop

### 🔸 Backend (Node.js + Express + MongoDB)
- ✅ RESTful APIs for:
  - User registration & login
  - Video CRUD
  - Channel creation & fetch
  - Comment CRUD
- ✅ Multer for handling file uploads (thumbnail, profilepicture)
- ✅ JWT authentication for protected routes
- ✅ Mongoose schemas for database modeling

---


## 🧰 Tech Stack

| Layer       | Technology                                  |
|-------------|---------------------------------------------|
| Frontend    | React, Redux Toolkit, React Router, Axios   |
| Styling     | Tailwind CSS                                |
| Icons       | React Icons                                 |
| Backend     | Node.js, Express.js                         |
| Auth        | JSON Web Tokens (JWT)                       |
| Uploads     | Multer, Cloudinary                          |
| Database    | MongoDB (Mongoose + MongoDB Atlas)          |
| Versioning  | Git, GitHub                                 |

---




## 🔧 Setup Instructions

### 📦 Backend

1. **Navigate to the backend folder:**
    ```bash
    cd Youtube-Clone-Backend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in root of backend folder:
    ```.env
    MONGO_URI=mongodb+srv://nishantsapkal2304:tEQEKm9mHKvuoTTn@cluster0.opnffpy.mongodb.net/Youtube-Clone-Backend-API
    PORT=4001
    JWT_SECRET=HelloWorld
    ACCESS_TOKEN_EXPIRY=24h
    CLOUD_NAME=dz6htenoq
    CLOUD_API_KEY=262279869213152
    CLOUD_API_KEY_SECRET=iokSNLs23Pllnx7j1KBT8XKPNUk
    ```

4. **Run the server:**
    ```bash
    npm start
    ```

---

### 🖥️ Frontend

1. **Navigate to the frontend folder:**
    ```bash
    cd Youtube-Clone-Frontend
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start the frontend server:**
    ```bash
    npm run dev
    ```

---



### 🌐 App Runs At:
- Frontend: http://localhost:5173

- Backend API: http://localhost:4001/api/v1


---

## 📡 API Endpoints

###  Youtube-Clone
- `Base_URL` — http://localhost:4001/api/v1
- `POST /user/register` — User registers
- `POST /user/login` — User logs in
- `POST /videos/` — Upload Video
- `GET /videos` — Get all the videos
- `GET /videos/:videoId` — Delete Video by owner
- `POST /comments/addComment` — Add comment to the video
- `POST /comments/:videoId` — Get all comments of that video
- `PUT /comments/editComment` — Edit comment of yours
- `DELETE /comments/deleteComment` — Delete comment of yours
- `POST /channels` — Create a new channel [1 user = 1 channel]
- `GET /channels/:id/videos` — Get videos of that particular channel
- `GET /channels/user/:userId` — Get channel by userID


---


### 🧪 Test Cases
 - Register/Login with JWT

 - Create channel after login

 - Upload videos with thumbnail

 - Comment

 - Delete own videos/comments

 - Search videos on homepage

 - Fully responsive layout


### Dummy User email and password to login
 - `email` - pixelraiders@gmail.com  || nomadiclens@gmail.com || voicebox@gmail.com 
 - `password` - 0000


---




## 📁 Screenshots

### 🏠 Homepage
![Homepage](./screenshots/homepage.png)

### ▶️ Video Player Page
![Video Player](./screenshots/videoDetails.png)

### ▶️ Comment Section
![Comment Sectiom](./screenshots/commentSection.png)

### 📺 Channel Page
![Create Channel](./screenshots/createChannel.png)
![Channel Page](./screenshots/channelPage.png)

### ✏️ Upload Video
![Upload](./screenshots/upload%20video.png)

### 🔐 Login/Register Page
![Authentication](./screenshots/register.png)
![Authentication](./screenshots/login.png)

### 📱 Responsive Layout
![Responsive](./screenshots/responsive.png)

### 🌐 DataBase Screenshot
![MongoDB](./screenshots/MongoDB.png)

### 📱 API Endpoint Test on POSTMAN
![API-Test](./screenshots/API-Test.png)

---

🙋 Author - Nishant Sapkal
GitHub: (https://github.com/nishant23042002)


---

