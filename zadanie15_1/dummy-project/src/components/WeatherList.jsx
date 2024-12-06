const WeatherList = (props) => {
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {props.items.map((post, index) => (
                <div key={index}>
                    <h3>{post.id_stacji}</h3>
                    <p>{JSON.stringify(post)}</p>
                </div>
            ))}
        </div>
    )
}

export default WeatherList;