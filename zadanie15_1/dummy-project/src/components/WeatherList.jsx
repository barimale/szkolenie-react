const WeatherList = (props) => {
    const goToDetails = () =>{

    }

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {props.items.map((post, index) => (
                <div key={index} style={{border: '1px solid black', padding: '20px'}} onClick={() => goToDetails()}>
                    <h3>{post.stacja}</h3>
                    <p>Temperatura: {post.temperatura} st. C</p>
                    <p>Ciśnienie: {post.cisnienie} hPa</p>
                </div>
            ))}
        </div>
    )
}

export default WeatherList;