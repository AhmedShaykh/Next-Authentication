import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/userModel";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {

    try {

        const { name, email, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        await connectDB();

        await User.create({ name, email, password: hashedPassword });

        return NextResponse.json({ message: "User Registered...!" }, { status: 201 });

    } catch (error) {

        return NextResponse.json(
            { message: error }, { status: 500 }
        );

    }

};