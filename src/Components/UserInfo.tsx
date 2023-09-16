import React from "react";

const UserInfo = () => {
    return (
        <div className="grid place-items-center h-screen">
            <div className="shadow-md shadow-slate-700 py-5 px-6 rounded-lg border-t-4 border-gray-600 w-[400px]">
                <div>
                    Name: <span className="font-bold">Ahmed</span>
                </div>

                <div>
                    Email: <span className="font-bold">Email</span>
                </div>

                <button
                    className="bg-white text-black font-bold cursor-pointer px-6 py-2 my-2 w-full"
                >
                    Log Out
                </button>
            </div>
        </div >
    )
}

export default UserInfo;