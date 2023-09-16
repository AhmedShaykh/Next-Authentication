import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {

    try {

        const { name, email, password } = await req.json();

        const hashedPassword = await bcrypt.hash(password, 10);

        return NextResponse.json({ message: "User Registered...!" }, { status: 201 });

    } catch (error) {

        return NextResponse.json(
            { message: error }, { status: 500 }
        );

    }

};