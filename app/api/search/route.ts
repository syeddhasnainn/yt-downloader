import { NextResponse } from "next/server"
import ytdl from "ytdl-core";
import fs from "fs";

export async function POST(req:Request) {

    const {url} = await req.json()
    const test = await ytdl.getInfo(url)

    const playbackUrls = test.formats.filter((format) => format.container === 'mp4')
    return NextResponse.json(playbackUrls)
}