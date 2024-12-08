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
        axios.get(`https://danepubliczne.imgw.pl/api/data/synop/id/${params.id}`)
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
            <h2>{item.stacja}</h2>
            <div style={{display: 'grid'}}>
                <p>Data pomiaru: {item.data_pomiaru}</p>
                <p>Godzina pomiaru: {item.godzina_pomiaru}</p>
                <p>Temperatura: {item.temperatura}</p>
                <p>Ciśnienie: {item.cisnienie}</p>
                <p>Prędkość wiatru: {item.predkosc_wiatru}</p>
                <p>Kierunek wiatru: {item.kierunek_wiatru}</p>
                <p>Wilgotność względna: {item.wilgotnosc_wzgledna}</p>
                <p>Suma opadu: {item.suma_opadu}</p>
                <button onClick={() => { navigate('/') }}>Wróć</button>
            </div>
        </>);
}

export default WeatherDetails;