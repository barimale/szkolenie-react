import { useNavigate } from 'react-router';

const WeatherList = (props) => {
    const navigate = useNavigate();

    const goToDetails = (stacjaId) => {
        navigate(`/weathers/${stacjaId}`)
    }

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            alignContent: 'stretch',
            alignItems: 'stretch',
            gap: '10px 30px'
        }}>
            {props.items.map((post, index) => (
                <div key={index} style={{
                    cursor: 'pointer',
                    border: '1px solid black',
                    padding: '20px',
                    borderRadius: '0px' ,
                    backgroundColor: 'white'
                }} onClick={() => goToDetails(post.id_stacji)}>
                    <h3>{post.stacja}</h3>
                    <p>Temperatura: {post.temperatura} st. C</p>
                    <p>Ciśnienie: {post.cisnienie} hPa</p>
                </div>
            ))}
        </div>
    )
}

export default WeatherList;