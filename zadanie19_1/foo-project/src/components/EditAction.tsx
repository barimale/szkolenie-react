import { useNavigate, useParams } from "react-router";

const EditAction = () => {
    const params = useParams()
    const navigate = useNavigate();

    return (
        <>
            <h1>Action edit</h1>
            <p>ID: {params.actionId}</p>
            <button onClick={() => navigate(`/customers/${params.id}`)}>Wroc</button>
        </>
    )
}

export default EditAction;