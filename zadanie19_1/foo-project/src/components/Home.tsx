import { useNavigate } from 'react-router';
import apiClient from '../utilities/axiosClient';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

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
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(1);

    useEffect(() => {
        apiClient.get(`/customers?page=${currentPage}&limit=${limit}`)
            .then(response => {
                setItems(response.data.data)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
            })
    }, [])

    const GoToDetails = (itemId: string) => {
        navigate(`/customers/${itemId}`);
    }

    const Logout = ()=>{
        localStorage.removeItem('authToken');
        navigate(`/login`);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
        <button onClick={()=>Logout()}>Logout</button>
            <h1>Home</h1>
            <h2>{items.map((item, index) => {
                return <>
                    <p key={index} style={{ cursor: 'pointer' }} >{item.name}</p>
                    <button onClick={() => GoToDetails(item._id)}>Szczegóły</button>
                </>
            })}</h2>
            <Pagination
                currentPage={currentPage}
                totalPages={limit}
                onPageChange={setCurrentPage}
            />
        </>)
}

export default Home;