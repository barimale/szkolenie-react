import { useState } from 'react';

const Example = () => {
    const [textStyle, setTextStyle] = useState({
        fontSize: 16, // w pikselach
        fontWeight: 'normal', // normalne lub pogrubione
        fontStyle: 'normal', // normalne lub kursywa
    });

    const updateStyles = (styleKey, value) => {
        setTextStyle({ ...textStyle, [styleKey]: value });
    }

    return (
        <>
            <button onClick={() => updateStyles('fontSize', textStyle.fontSize + 2)}>Powiększ tekst</button>
            <button onClick={() => updateStyles('fontSize', textStyle.fontSize - 2)}>Pomniejsz tekst</button>
            <button onClick={() => updateStyles('fontWeight', 'bold')}>Pogrub</button>
            <button onClick={() => updateStyles('fontWeight', 'normal')}>Odchudź</button>
            <button onClick={() => updateStyles('fontStyle', 'italic')}>Kursywa</button>
            <button onClick={() => updateStyles('fontStyle', 'normal')}>Normalny</button>
            <p style={{
                fontSize: textStyle.fontSize,
                fontWeight: textStyle.fontWeight,
                fontStyle: textStyle.fontStyle
            }}>"Witaj w React!"</p>
        </>
    );
}

export default Example;
