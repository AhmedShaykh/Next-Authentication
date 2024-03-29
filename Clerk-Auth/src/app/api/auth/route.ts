import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

export async function GET(request: NextRequest) {

    const { userId } = auth();

    if (!userId) {

        return NextResponse.json("Unauthorized", { status: 401 });

    }

    const data = { message: userId };

    return NextResponse.json({ data });

};