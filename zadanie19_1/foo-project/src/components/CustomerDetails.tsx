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
        <div style={{border: '1px solid black', padding: '30px'}}>
            <h2>Szczegóły</h2>
            <button onClick={() => {  }}>Edytuj</button>
            <p>ID: {item?._id}</p>
            <p>Name: {item?.name}</p>
            <p>NIP: {item?.nip}</p>
            <p>Actions:</p>
            <ul>
                {item?.actions.map((item, index) => {
                    return (
                        <li key={index}>
                            <h4>{item._id}</h4>
                            <p>Opis: {item.description}</p>
                            <p>Data: {item.date}</p>
                            <button onClick={() => {  }}>Edytuj akcje</button>
                        </li>);
                })}
            </ul>
            <button onClick={() => {  }}>Dodaj akcje</button>
            <button onClick={() => { navigate('/') }}>Wróć</button>
        </div>);
}

export default CustomerDetails;