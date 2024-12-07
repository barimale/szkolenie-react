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
            gap: '20px 5px'
        }}>
            {props.items.map((post, index) => (
                <div key={index} style={{
                    cursor: 'pointer',
                    border: '1px solid black',
                    padding: '20px',
                    margin: props.items.length < 2 ? '20px' : 'unset',
                    borderRadius: '0px' ,
                    width: '250px',
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