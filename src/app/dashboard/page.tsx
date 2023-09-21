import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import UserInfo from "@/Components/UserInfo";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {

    const session = await getServerSession(authOptions);

    if (!session) {

        redirect("/") || redirect("/register");
    }

    return (
        <>
            <UserInfo />
        </>
    )
}

export default Dashboard;