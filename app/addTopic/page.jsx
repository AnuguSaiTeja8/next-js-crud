"use client"

import Buttons from "@/components/Buttons";
import Input from "@/components/Input";
import { createTopic } from "@/components/api/url";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddTopic() {
    const router = useRouter();

    const [title, setTitle] = useState('')
    const [dis, setDis] = useState('')
    
    const [loading, setloading] = useState(false)

    let obj = {
        title: title,
        description: dis
    }
    async function topicAdd() {
        setloading(true)
        await createTopic(obj)
        router.push('/')
    }
   
    return (
        <form class="max-w-sm ">
            <Input value={title} setState={setTitle} />
            <Input value={dis} setState={setDis} />
            <Buttons title={'Add Topic'} handler={topicAdd} loading={loading}/>
         </form>

    )
}