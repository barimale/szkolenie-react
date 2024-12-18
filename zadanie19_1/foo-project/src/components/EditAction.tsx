import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../utilities/axiosClient";

const EditAction = () => {
    const params = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        axiosClient
            .get(`/${params.id}?page=1&limit=10`)
            .then(res => {
                const data = res.data;

            }).catch(error=>{
                console.log(error)
            })
    }, [])
    return (
        <>
            <h1>Action edit</h1>
            <p>ID: {params.actionId}</p>
            <p>CustomerID: {params.id}</p>
            <button onClick={() => navigate(`/customers/${params.id}`)}>Wroc</button>
        </>
    )
}

export default EditAction;