import Link from "next/link";

export default function Navbar(){
    return(
       <div> 
        <div className="bg-stone-500  flex px-8 py-3 item-center justify-between">
           <Link href={"/"}>Topics </Link> 
           <Link className="bg-white px-2" href={"/addTopic"}>Add Topic</Link>
        </div>
       
        </div>
    )

}