import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import RegisterForm from "@/Components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Register = async () => {

    const session = await getServerSession(authOptions);

    if (session) redirect("/dashboard");

    return (
        <>
            <RegisterForm />
        </>
    )
};

export default Register;