"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {

    const [name, setName] = useState<string>("");

    const [email, setEmail] = useState<string>("");

    const [password, setPassword] = useState<string>("");

    const [error, setError] = useState<string>("");

    const router = useRouter();

    const handleSubmit = async (e: any) => {

        e.preventDefault();

        if (!name || !email || !password) {

            setError("Something Missing!");

            return;
        }

        try {

            const userExists = await fetch("/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email })
            });

            const { user } = await userExists.json();

            if (user) {

                setError("User Already Exists...");

                return;
            }

            const res = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    password
                })
            });

            const form = e.target;

            form.reset();

            router.push("/");

            if (!res.ok) {

                console.log("User Registration Failed.");

            }

        } catch (error) {

            console.log("Error During Registration: ", error);

        }
    };

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md shadow-slate-700 py-5 px-6 rounded-lg border-t-4 border-gray-600 w-[500px]">
                <h1 className="text-2xl text-center font-bold my-6">
                    Register
                </h1>

                <form
                    className="flex flex-col gap-6"
                    onSubmit={handleSubmit}
                >
                    <input
                        className="p-3 text-black font-semibold"
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Your Full Name"
                        type="text"
                    />

                    <input
                        className="p-3 text-black font-semibold"
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Your Email"
                        type="email"
                    />

                    <input
                        className="p-3 text-black font-semibold"
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                        type="password"
                    />
                    <button
                        className="bg-white text-black font-bold cursor-pointer px-6 py-2 my-2"
                        type="submit"
                    >
                        Login
                    </button>

                    {error && (
                        <h2 className="text-red-500 text-md font-semibold text-center rounded-md">
                            {error}
                        </h2>
                    )}

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