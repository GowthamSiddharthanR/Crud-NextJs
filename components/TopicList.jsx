
import { HiPencilAlt } from 'react-icons/hi'
import RemoveBtn from './RemoveBtn'
import Link from 'next/link'
import Contact from './Contact';

let getData = async () => {
    try {
        const ress = await fetch("http://localhost:3000/api/topics", { cache: "no-store" });
        const responseBody = await ress.json();
        console.log("datado", responseBody);
        if (!ress.ok) {
            throw new Error("failed to fetch");
        }
        return responseBody


    } catch (error) {
        console.log(error);
    }
}

export default async function TopicList() {


    const topic = await getData();

    return (
        <>

            <Contact />
            {topic && topic.res.map((t) => (

                <div className='p-4 border border-slate-400 my-3 flex justify-between gap-5 items-start'>
                    <div >
                        <h2 className='font-bold text-2xl' >{t.title}</h2>
                        <div >{t.description}</div>
                    </div>
                    <div className='flex gap-2' >
                        <RemoveBtn id={t._id} />

                        <Link href={`/editTopic/${t._id}`}><HiPencilAlt size={25} /></Link>
                    </div>
                </div>
            ))}
        </>
    )

}