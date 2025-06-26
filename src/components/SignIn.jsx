import { useState } from "react";


export const SignIn = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState(null);
    const [isRegistering, setIsRegistering] = useState(true);
    const [message, setMessage] = useState("");




    async function handleSubmit(e) {
        e.preventDefault();
        setMessage(""); // Reset message

        try {
            let response;

            if (isRegistering) {
                const formData = new FormData();
                formData.append("userName", name);
                formData.append("email", email);
                formData.append("password", password);
                formData.append("profilePicture", profilePic);

                response = await fetch("http://localhost:4001/api/v1/user/register", {
                    method: "POST",
                    body: formData,
                });

            } else {
                response = await fetch("http://localhost:4001/api/v1/user/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ email, password }),
                });
                // Login sends JSON
                if (!email || !password) {
                    setMessage("Invalid email or password!!");
                    return;
                }
            }
            const data = await response.json();
            console.log(data);
            if(response.ok){
                window.location.href = "/videos";
            }
            if (!response.ok) {
                throw new Error(data.message || "Something went wrong");
            }

            localStorage.setItem("user", data.loggedInUser.name);
            localStorage.setItem("token", data.token);
            localStorage.setItem("profilePic", data.loggedInUser.profilePic_URL);

            setMessage(data.message);
            setIsRegistering(false);
            // Optional: Save token, redirect, etc.
        } catch (err) {
            setMessage(`❌ ${err.message}`);
        }
    }









    return (
        <div className="flex justify-center items-center my-14">
            <div className="shadow-xl flex max-[680px]:flex-col justify-evenly items-center p-4 rounded-4xl bg-white">
                <div className="flex flex-col gap-4 p-16 max-[680px]:py-3">
                    <img
                        className="w-25 h-20 max-[680px]:h-15"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube"
                    />
                    <h1 className="text-3xl w-60 font-semibold">{isRegistering ? "Create a Youtube Account" : "Login in your Youtube Account"}</h1>
                    <p className="text-gray-700 font-semibold">Enter Your Name</p>
                </div>
                <div>

                    {/* error message div */}
                    <div className="flex justify-center items-center">
                        <h1 className="text-red-600 font-semibold">{message}</h1>
                    </div>
                    <form
                        action="/"
                        method="POST"
                        encType="multipart/form-data"
                        className="bg-white p-6 rounded-lg space-y-4 w-full max-w-md"
                        noValidate
                        onSubmit={handleSubmit}
                    >
                        {
                            isRegistering ? (
                                <>
                                    <fieldset className="border-2 border-blue-500 rounded-md px-2 group">
                                        <legend className="text-sm text-blue-500 px-1">Name</legend>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Your full name"
                                            required
                                            minLength={3}
                                            maxLength={24}
                                            autoComplete="name"
                                            className="outline-none p-2 w-full border-none rounded-md bg-white"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />

                                    </fieldset>

                                    <fieldset className="border-2 border-blue-500 rounded-md px-2 group">
                                        <legend className="text-sm text-blue-500 px-1">Profile Picture</legend>
                                        <input
                                            type="file"
                                            name="profilePicture"
                                            id="profilePicture"
                                            accept="image/*"
                                            required
                                            className="w-full p-2 rounded-md bg-white text-gray-400 file:border-none file:mr-2 file:cursor-pointer outline-none"
                                            onChange={(e) => setProfilePic(e.target.files[0])}
                                        />
                                    </fieldset>
                                </>
                            ) : ""
                        }

                        <fieldset className="border-2 border-blue-500 rounded-md px-2 group">
                            <legend className="text-sm text-blue-500 px-1">Email</legend>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="you@example.com"
                                required
                                autoComplete="email"
                                className="outline-none p-2 w-full rounded-md bg-white"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </fieldset>

                        <fieldset className="border-2 border-blue-500 rounded-md px-2 group">
                            <legend className="text-sm text-blue-500 px-1">Password</legend>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Create a password"
                                required
                                minLength={8}
                                className="outline-none p-2 w-full rounded-md bg-white"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </fieldset>


                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 mt-4 px-4 rounded-md cursor-pointer"
                        >
                            {isRegistering ? "Register" : "Log In"}
                        </button>
                        <div className="flex gap-2 justify-center items-center">
                            <p>{isRegistering ? "Already have an account?" : "Don't have an account?"}</p>
                            <span className="underline text-blue-500 cursor-pointer" onClick={() => setIsRegistering(!isRegistering)}>{isRegistering ? "Login" : "Register"}</span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}