
export const SignIn = () => {
    return (
        <div className="flex justify-center items-center my-14">
            <div className="shadow-xl flex max-[680px]:flex-col justify-evenly items-center p-4 rounded-4xl bg-white">
                <div className="flex flex-col gap-4 p-16 max-[680px]:py-3">
                    <img
                        className="w-25 h-20 max-[680px]:h-15"
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                        alt="YouTube"
                    />
                    <h1 className="text-3xl w-60 font-semibold">Create a Youtube Account</h1>
                    <p className="text-gray-700 font-semibold">Enter Your Name</p>
                </div>
                <div>
                    <form
                        action="/"
                        method="POST"
                        encType="multipart/form-data"
                        className="bg-white p-6 rounded-lg space-y-4 w-full max-w-md"
                        noValidate
                    >
                        <fieldset className="border-2 border-blue-500 rounded-md px-2 group">
                            <legend className="text-sm text-blue-500 px-1">Name</legend>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Your full name"
                                required
                                minLength={2}
                                maxLength={50}
                                autoComplete="name"
                                className="outline-none p-2 w-full border-none rounded-md bg-white"
                            />

                        </fieldset>

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
                            />
                        </fieldset>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 mt-4 px-4 rounded-md cursor-pointer"
                        >
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}