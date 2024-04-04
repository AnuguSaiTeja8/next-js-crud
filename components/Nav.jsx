import Link from "next/link";

 
export default function Nav() {
  return (
    <div className="bg-gray-700  p-5 flex justify-between">
         <Link href='/'><p className="text-white">Welcome</p></Link>
        <Link href='/addTopic'><button className="bg-white p-2 rounded-lg">Add +</button></Link>
    </div>
  )
}
