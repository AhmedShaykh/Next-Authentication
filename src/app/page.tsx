import React from "react";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginForm from "@/Components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Home = async () => {

    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");

    return (
        <>
            <LoginForm />
        </>
    )
};

export default Home;