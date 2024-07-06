import { NextResponse } from "next/server"
import ytdl from "ytdl-core";

export async function POST(req: Request) {

    const { url } = await req.json()
    const test = await ytdl.getInfo(url)
    return NextResponse.json(test)
}