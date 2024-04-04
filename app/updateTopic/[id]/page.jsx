"use client"
import Input from "@/components/Input";
import { getSingleTopics, updateTopic } from "@/components/api/url";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import Buttons from "@/components/Buttons";
import Loading from "@/components/Loading";

export default function page() {
    let { id } = useParams()
    const router = useRouter();
 
     const [title, setTitle] = useState()
    const [dis, setDis] = useState()
    const [loading, setloading] = useState(false)
    const [dataloading, setDataloading] = useState(true)

    let obj = {
        newTitle: title,
        newDescription: dis
    }


    async function callFunction() {
        let cons = await getSingleTopics(id)
        // setapi(cons);
        setTitle(cons?.data?.title)
        setDis(cons?.data?.description)
        setDataloading(false)
    }

    useEffect(() => {

        callFunction()


    }, [])

    async function topicupdate() {
        setloading(true)
        await updateTopic(id, obj)
        router.push('/')
    }
    if(dataloading) {
        return <Loading/>
    }

    return (
        <form class="max-w-sm ">
            <Input value={title} setState={setTitle} />
            <Input value={dis} setState={setDis} />
            <Buttons title={'Update Topic'} handler={topicupdate}  loading={loading}/>
         </form>
    )
}
