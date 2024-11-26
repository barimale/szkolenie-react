const ControlPanel = (props) => {

    return (
        <>
            <button onClick={() => props.OnEnabled()}>Włącz światło</button>
            <button onClick={() => props.OnDisabled()}>Wyłącz światło</button>
        </>
    );
}

export default ControlPanel;