import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import apiClient from '../utilities/axiosClient';

export type Action = {
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

    const GetCustomer = () => {
        apiClient.get(`/customers/${params.id}`)
            .then(response => {
                setItem(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
            })
    };

    useEffect(() => {
        GetCustomer();
    }, [])

    useEffect(() => {
        GetCustomer();
    }, [item?.actions])

    const removeAction = async (actionId: string) => {
        await apiClient.delete(`/actions/${actionId}`)
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
            })
    }

    const editAction = (actionId: string, customerId: string) => {
        navigate(`/customers/${customerId}/action/${actionId}`)
    }

    const addAction = (customerId: string | undefined) => {
        navigate(`/customers/${customerId}/action/new`)
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <div style={{ border: '1px solid black', padding: '30px' }}>
            <h2>Szczegóły</h2>
            <p>ID: {item?._id}</p>
            <p>Nazwa: {item?.name}</p>
            <p>NIP: {item?.nip}</p>
            <p>Akcje:</p>
            {item?.actions.length === 0 ? <p>-</p> : (
                <ul>
                    {item?.actions.map((subitem, index) => {
                        return (
                            <li key={index} style={{ border: '1px solid gray', margin: '10px' }}>
                                <h4>ID: {subitem._id}</h4>
                                <p>Opis: {subitem.description}</p>
                                <p>Data: {subitem.date}</p>
                                <p>Typ: {subitem.type}</p>
                                <button style={{ margin: '10px' }} onClick={() => { editAction(subitem._id, item._id) }}>Edytuj akcję</button>
                                <button style={{ margin: '10px' }} onClick={() => { removeAction(subitem._id) }}>Usuń akcję</button>
                            </li>);
                    })}
                </ul>
            )}
            <button style={{ margin: '10px' }} onClick={() => { addAction(item?._id) }}>Dodaj akcje</button>
            <button style={{ margin: '10px' }} onClick={() => { navigate('/') }}>Wróć</button>
        </div>);
}

export default CustomerDetails;