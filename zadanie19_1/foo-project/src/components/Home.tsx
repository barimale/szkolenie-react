import apiClient from '../utilities/axiosClient';
import { useEffect, useState } from 'react';

type Customer = {
    _id: string,
    name: string,
    npm: string,
    actions: string[]
}
const Home = () => {
    const [items, setItems] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        apiClient.get(`/customers?page=${1}&limit=${20}`)
            .then(response => {
                setItems(response.data.data)
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
            <h2>{items.map((item, index)=>{
                return <p style={{cursor: 'pointer'}} >{item.name}</p>
            })}</h2>
        </>)
}

export default Home;