import './../ButtonsPanel.css';

const Child = (props) => {

    return (
        <div className="buttonsPanel">
            <button onClick={() => props.passValue('Pokaz wiadomosc')}>Pokaż wiadomość</button>
            <button onClick={() => props.passValue('Ukryj wiadomość')}>Ukryj wiadomość</button>
            <button onClick={() => props.passValue('Dummy')}>Dummy</button>
        </div>
    );
}

export default Child;
