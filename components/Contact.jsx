"use client"
import { useState } from "react"

export default function Contact() {
    const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        message: "",
        email: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("cccccccccc")
        setStatus("Sending...");
        try {
            const response = await fetch("http://localhost:3000/api/sendMail", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
          
            if (response.ok) {
                setStatus("Message sent!");
                setFormData({ name : "", message : "", email : "" });
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
           setStatus("Error occurred.");

        }
    };

    return (
        <>
            <div className="bg-stone-300 py-5">
                <h2 className="text-lg px-5 font-bold text-gray-500">Contact </h2>
                <form onSubmit={handleSubmit} className="flex flex-row gap-3 py-3 px-5">

                    <label>Name : </label>
                    <input className="border p-1"
                        required
                        onChange={handleChange}
                        value={formData.name}
                        name="name"
                        type="text"
                        placeholder=" Enter name"  ></input>
                    <label>Message : </label>
                    <input className="border p-1"
                        required
                        onChange={handleChange}
                        value={formData.message}
                        name="message"
                        type="text"
                        placeholder=" Message"></input>
                    <label>Mail : </label>
                    <input className="border p-1"
                        required
                        onChange={handleChange}
                        value={formData.email}
                        name="email"
                        type="email"
                        placeholder=" MailId" ></input>
                    <button type="submit"
                        className="bg-gray-500 hover:bg-stone-300 border border-blue-900 rounded-3xl mx-5 py-1 px-5">Send</button>
                </form>
                <p className="mx-5">status : {status}</p>
            </div>
        </>
    )
}