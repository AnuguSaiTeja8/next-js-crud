import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(request , {params}) {
    console.log("params",params);
    console.log("request",request);
    const {id} = params
    const { newTitle: title  , newDescription:description} = await request.json()
    await connectMongoDB()
    await Topic.findByIdAndUpdate(id , {title , description

    })

    return NextResponse.json({ message: "Updated Topic" } , {status:200})
}

export async function GET(request , {params}) {
    console.log("request",request);
    const {id} = params
    console.log(id);
     await connectMongoDB()
   const data =  await Topic.findOne({_id:id} )

    return NextResponse.json({ data})
}