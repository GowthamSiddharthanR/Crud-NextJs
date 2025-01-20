"use client"
import {useState} from "react";
import {useRouter}from "next/navigation";
export default function AddTopic(){
    const router=useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title || !description){
            alert("please fill all fields");
            return;
        }
        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, description})
            });
            if(res.ok){
              router.push("/")
            }else {
                throw new Error("failed to add topic");
            }
           
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input 
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text" 
            placeholder="Title" 
            className="border border-slate-500 py-2 px-8 mt-5">
                
            </input>
            <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
             type="text" 
             placeholder="Description" 
             className="border border-slate-500 py-2 px-8 ">

             </input>
            <button type="submit" className="bg-green-500 py-2 px-8 w-fit text-white">Add Topic</button>
        </form>
    )
}