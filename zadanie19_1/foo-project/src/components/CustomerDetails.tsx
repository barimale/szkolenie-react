import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import apiClient from '../utilities/axiosClient';

type Action = {
    _id: string,
    type: string,
    description: string,
    date: string,
    customer: string
}

type CustomerDetail = {
    _id: string,
    name: string,
    nip: string,
    actions: Action[]
}

const CustomerDetails = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [item, setItem] = useState<CustomerDetail>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        apiClient.get(`/customers/${params.id}`)
            .then(response => {
                setItem(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
            <p>ID: {item?._id}</p>
            <p>Name: {item?.name}</p>
            <p>NIP: {item?.nip}</p>
            <p>Actions:</p>
            <ul>
            {item?.actions.map((item, index)=>{
                return <li key={index}>{item._id}</li>
            })}
            </ul>
            <button onClick={() => { navigate('/') }}>Wróć</button>
        </>);
}

export default CustomerDetails;