import { useParams } from "react-router";

const CreateAction = () => {
    const params = useParams()

    return (
        <>
            <h1>Action create</h1>
            <p>ID: {params.id}</p>
            
        </>
    )
}

export default CreateAction;