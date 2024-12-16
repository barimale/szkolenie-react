import { useNavigate } from 'react-router';
import apiClient from '../utilities/axiosClient';
import { useEffect, useState } from 'react';

type Customer = {
    _id: string,
    name: string,
    npm: string,
    actions: string[]
}
const Home = () => {
    const navigate = useNavigate();
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

    const GoToDetails = (itemId: string) =>{
        navigate(`/customers/${itemId}`);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <h1>Home</h1>
            <h2>{items.map((item, index) => {
                return <>
                    <p key={index} style={{ cursor: 'pointer' }} >{item.name}</p>
                    <button onClick={() => GoToDetails(item._id)}>Szczegóły</button>
                </>
            })}</h2>
        </>)
}

export default Home;