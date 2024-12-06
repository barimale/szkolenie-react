import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDetails = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [item, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Fetching data from API
        axios.get(`https://danepubliczne.imgw.pl/api/data/synop/id/${params.id}`)
            .then(response => {
                setItem(response.data) // Setting data in state
                setLoading(false)
            })
            .catch(error => {
                setError('An error occurred while fetching data')
                setLoading(false)
            })
    }, []) 
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
            <h2>{item.stacja}</h2>
            <p>data_pomiaru: {item.data_pomiaru}</p>
            <p>godzina_pomiaru: {item.godzina_pomiaru}</p>
            <p>temperatura: {item.temperatura}</p>
            <p>predkosc_wiatru: {item.predkosc_wiatru}</p>
            <p>kierunek_wiatru: {item.kierunek_wiatru}</p>
            <p>wilgotnosc_wzgledna: {item.wilgotnosc_wzgledna}</p>
            <p>suma_opadu: {item.suma_opadu}</p>
            <button onClick={() => { navigate('/') }}>Wróć</button>
        </>);
}

export default WeatherDetails;