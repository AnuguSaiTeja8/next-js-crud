import connectMongoDB from "@/libs/mongodb"
import Topic from "@/models/topic"
import { NextResponse } from "next/server"


export async function POST(request) {
    const { title, description } = await request.json()
    await connectMongoDB()
    await Topic.create({
        title,
        description
    })

    return NextResponse.json({ message: 'Added Topic' }, { status: 201 })
}

export async function GET() {
    // const { title , description} = await request.json()
    await connectMongoDB()
    const data = await Topic.find()

    return NextResponse.json({ data })
}

export async function DELETE(request) {
    console.log("request",request);
    const id = request.nextUrl.searchParams.get("id")
    // const { title , description} = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)

    return NextResponse.json({ message: "Deleted Topic" })
}

