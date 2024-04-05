"use client"


import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { deleteTopic, getTopics } from "./api/url";
import { useRouter } from "next/navigation";
import Loading from "./Loading";

export default function List() {
    const router = useRouter()
    const [api, setapi] = useState([])
    const [loading, setloading] = useState(true)
    const [ids, setId] = useState('')
    const [openPopup, setopenPopup] = useState(false)

    async function callFunction() {
        let cons = await getTopics()
        setloading(false)
        setapi(cons);
    }

    useEffect(() => {

        callFunction()

    }, [])

    async function togglePopup(id) {
        setId(id)
        setopenPopup(!openPopup)



    }
    async function topicDelete() {
        router.refresh()
        await deleteTopic(ids)
        setopenPopup(!openPopup)
        window.location.reload()

    }

    if (loading) {
        return <Loading />
    }

    if (api?.data?.length < 1) {
        return <div className="grid justify-center mt-10"><h1>No Data</h1></div>
    }

    return (
        <>
            {
                api && api?.data?.map((e, i, a) =>

                    <div key={e._id} className="flex justify-between max-w-full p-6 my-3 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                        <div>
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{e?.title}</h5>
                            <p class="font-normal text-gray-700 dark:text-gray-400">{e?.description}.</p>
                        </div>
                        <div className="justify-self-end ">
                            <Link href={`updateTopic/${e._id}`}><button className="mr-3 bg-green-500 p-3 text-white rounded-lg">EDIT</button></Link>
                            <button className="bg-red-500 rounded-lg p-3 text-white  " onClick={() => togglePopup(e._id)} >DELET</button>
                        </div>
                    </div>

                    // <div key={e._id} className="flex justify-between border my-2 p-5">

                    //     <div>
                    //         <p className="text-xl font-semibold">{e?.title}</p>
                    //         <p>{e?.description}</p>
                    //     </div>
                    //     <div className="justify-self-end ">
                    //         <Link href={`updateTopic/${e._id}`}><button className="mr-3 bg-green-500 p-3 text-white rounded-lg">EDIT</button></Link>
                    //         <button className="bg-red-500 rounded-lg p-3 text-white  " onClick={() => togglePopup(e._id)} >DELET</button>
                    //     </div>
                    // </div>
                )}

            {
                openPopup === true ?



                    <div id="popup-modal" tabindex="-1" class="  overflow-y-auto overflow-x-hidden fixed top-20 right-0 left-[30%] z-50 justify-center items-center w-full md:inset-50 h-[calc(100%-1rem)] max-h-full">
                        <div class="relative p-4 w-full max-w-md max-h-full">
                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                <button type="button" onClick={togglePopup} class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                <div class="p-4 md:p-5 text-center">
                                    <svg class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                                    <button onClick={topicDelete} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                                        {/* Yes, I m sure */}
                                        OK
                                    </button>
                                    <button onClick={togglePopup} data-modal-hide="popup-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                                </div>
                            </div>
                        </div>
                    </div> :
                    null

            }
        </>
    )
}
