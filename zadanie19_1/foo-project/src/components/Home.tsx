import apiClient from '../utilities/axiosClient';
import { useEffect, useState } from 'react';

const Home = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        apiClient.get('/customers')
            .then(response => {
                setItems(response.data)
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
            <h1>Home</h1>
            <h2>{JSON.stringify(items)}</h2>
        </>)
}

export default Home;