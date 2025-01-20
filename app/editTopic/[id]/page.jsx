import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store"
        });
        const responseBody = await res.json();
        console.log("datado", responseBody);
        if (!res.ok) {
            throw new Error("failed to fetch");
        }
     
        return responseBody
    } catch (error) {
        console.log(error);

    }
}
export default async function editTopic({ params }) {
    const { id } = await params;
    const topic = await getTopicById(id);
    const { title, description } = topic.res;
    console.log("id", id);
    console.log("title", title);
    console.log("description", description);
    return (
        <>
            <EditTopicForm id={id} title={title} description={description} />
        </>
    )
}