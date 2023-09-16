import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/lib/userModel";

export async function POST(req: NextRequest) {

    try {

        await connectDB();

        const { email } = await req.json();

        const user = await User.findOne({ email }).select("_id");

        return NextResponse.json({ user });

    } catch (error) {

        return NextResponse.json(
            { message: error }, { status: 500 }
        );

    }

};