import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import apiClient from '../utilities/axiosClient';

const CustomerDetails = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [item, setItem] = useState()
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
            <p>{JSON.stringify(item)}</p>
            <button onClick={() => { navigate('/') }}>Wróć</button>
        </>);
}

export default CustomerDetails;