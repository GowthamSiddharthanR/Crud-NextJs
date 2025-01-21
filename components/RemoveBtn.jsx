"use client"
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";
export default function RemoveBtn({id}){
    const router=useRouter();
    const removeTopic = async () => {
        
   try{
            const confirmed=confirm("are you sure ");
            if(confirmed){
            const res = await fetch(`/api/topics?id=${id}`, {
                method: "DELETE"
            });
        
            if(res.ok){
                console.log("deleted");
                router.refresh();
            }else {
                throw new Error("failed to delete");
            }
        }
    } catch (error) {
        console.log(error);
        
    }
}
    return(
       <button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash size={25}/>
       </button>
    )
}