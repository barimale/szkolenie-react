import { useNavigate } from 'react-router';
import apiClient from '../utilities/axiosClient';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

export type Customer = {
    _id: string,
    name: string,
    nip: string,
    address: {
        street: string,
        suite: string,
        city: string,
        postcode: string
    }
    actions: string[]
}

type HomeProps = {
    onEdit: (item: Customer| undefined) => void
}
const Home = (props: HomeProps) => {
    const navigate = useNavigate();
    const [items, setItems] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(3);

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
    }, [currentPage, limit])

    const GoToDetails = (itemId: string) => {
        navigate(`/customers/${itemId}`);
    }

    const Logout = () => {
        localStorage.removeItem('authToken');
        navigate(`/login`);
    }

    const removeClient = (clientId: string) => {
        apiClient.delete(`/customers/${clientId}`)
            .then(response => {
                const removed = items.filter(p => p._id !== clientId)
                setItems(removed)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
            })
    }

    useEffect(()=>{
        props.onEdit(undefined);
    },[]);

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <>
                <button onClick={() => Logout()}>Wyloguj</button>
                <h1>Home</h1>
                <button onClick={() => { navigate(`/customers/new`); }}>Stworz klienta</button>
                {items.length > 0 && (
                    <>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '20px',
                            border: '1px solid black',
                            margin: '20px'
                        }}>{items.map((item, index) => {
                            return <div style={{ border: '1px solid black', padding: '20px' }}>
                                <p key={index} style={{ cursor: 'pointer' }} ><b>{item.name}</b></p>
                                <button onClick={() => props.onEdit(item)}>Edytuj</button>
                                <button onClick={() => GoToDetails(item._id)}>Szczegóły</button>
                                <button onClick={() => removeClient(item._id)}>Usun</button>
                            </div>
                        })}</div>

                    </>
                )}
                {items.length === 0 && (
                    <p>Brak klientów w systemie.</p>
                )
                }
            </>
            <Pagination
                currentPage={currentPage}
                totalPages={limit -1}
                onPageChange={setCurrentPage}
            />
        </>)
}

export default Home;