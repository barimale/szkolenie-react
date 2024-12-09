
const Filters = (props) => {
    return (
        <div style={{ border: '0px solid black', padding: '40px 20px 20px 20px' }}>
            <label>
                Szukaj: <input name="myInput" onChange={(event) => { props.OnFilterChanged(event.target.value) }}
                />
            </label>
        </div>)
}

export default Filters;