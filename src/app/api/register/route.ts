import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/userModel";
import { hash } from "bcryptjs";

export async function POST(req: NextRequest) {

    try {

        await connectDB();

        const { fullName, email, password } = await req.json();

        const userExists = await User.findOne({ email });

        if (userExists) {

            return NextResponse.json({ message: "User Already Exists" });

        }

        const hashedPassword = await hash(password, 12);

        await User.create({
            fullName,
            email,
            password: hashedPassword
        });

        return NextResponse.json({ message: "User Registered...!" }, { status: 201 });

    } catch (error) {

        return NextResponse.json(
            { message: error }, { status: 500 }
        );

    }

};