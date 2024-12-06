import { useParams } from 'react-router';

const WeatherDetails = () => {
    const params = useParams()
 
    return <h2>Weather {params.id}</h2>
}

export default WeatherDetails;