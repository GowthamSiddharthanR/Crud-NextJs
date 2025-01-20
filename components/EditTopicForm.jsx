"use client"
import {useState} from "react";
import {useRouter}from "next/navigation";
export default function EditTopicForm({id,title,description}) {
    const[newTitle,setNewTitle]=useState(title);
    const[newDescription,setNewDescription]=useState(description);
    const router=useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({newTitle,newDescription})
            });
           
            if(res.ok){
                router.push("/");
            }else {
                throw new Error("failed to edit topic");
            }
            
        } catch (error) {
            console.log(error);
            
        }
    }
  return( 
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
    <input 
    onChange={(e) => setNewTitle(e.target.value)}
    value={newTitle}
    type="text" 
    placeholder="Title" 
    className="border border-slate-500 py-2 px-8 mt-5"></input>
    <input 
     onChange={(e) => setNewDescription(e.target.value)}
     value={newDescription}
    type="text" 
    placeholder="Description" 
    className="border border-slate-500 py-2 px-8 "></input>
    <button type="submit" className="bg-green-500 py-2 px-8 w-fit text-white">Edit Topic</button>
</form>
  )
}