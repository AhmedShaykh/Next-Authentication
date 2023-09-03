"use client";
import React from "react";
import { useUser } from "@clerk/nextjs";

const User = () => {

    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded || !isSignedIn) {
        return (
            <div className="flex justify-center items-center my-28">
                <h1 className="text-4xl font-bold">
                    Something Went Wrong...!
                </h1>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center my-28">
            <h1 className="text-4xl font-bold">
                Welcome <span className="text-purple-700">{user?.fullName}!</span>
            </h1>
        </div>
    )
};

export default User;