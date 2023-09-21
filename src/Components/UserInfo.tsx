"use client";
import { signOut, useSession } from "next-auth/react";

const UserInfo = () => {

    const { data: session } = useSession();

    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md shadow-slate-700 py-5 px-6 rounded-lg border-t-4 border-gray-600 w-[400px]">
                <div className="my-3">
                    Name: <span className="font-bold">{session?.user?.name}</span>
                </div>

                <div className="my-3">
                    Email: <span className="font-bold">{session?.user?.email}</span>
                </div>

                <button
                    className="bg-white text-black font-bold cursor-pointer px-6 py-2 my-2 w-full"
                    onClick={() => signOut()}
                >
                    Log Out
                </button>
            </div>
        </div >
    )
};

export default UserInfo;