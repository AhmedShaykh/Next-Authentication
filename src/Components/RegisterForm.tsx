import Link from "next/link";
import React from "react";

const RegisterForm = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md shadow-slate-700 py-5 px-6 rounded-lg border-t-4 border-gray-600 w-[500px]">
                <h1 className="text-2xl text-center font-bold my-6">
                    Register
                </h1>

                <form
                    className="flex flex-col gap-6"
                >
                    <input
                        className="p-3 text-black font-semibold"
                        placeholder="Enter Your Full Name"
                        type="text"
                    />

                    <input
                        className="p-3 text-black font-semibold"
                        placeholder="Enter Your Email"
                        type="email"
                    />

                    <input
                        className="p-3 text-black font-semibold"
                        placeholder="Enter Your Password"
                        type="password"
                    />
                    <button
                        className="bg-white text-black font-bold cursor-pointer px-6 py-2 my-2"
                        type="submit"
                    >
                        Login
                    </button>

                    <h2 className="text-red-500 text-md font-semibold text-center rounded-md">
                        Error
                    </h2>

                    <Link className="text-md text-white font-semibold mt-2 flex justify-between" href={"/"}>
                        Already Have An Account?
                        <span className="underline font-medium">
                            Login
                        </span>
                    </Link>
                </form>
            </div>
        </div>
    )
};

export default RegisterForm;