import { useNavigate } from 'react-router';
import styles from 'styled-components';

const LinkedP = styles.p`
    cursor: pointer;
`
const Home = (props) => {
    const navigate = useNavigate();

    const goToCallback = (itemId) => {
        navigate(`/product/${itemId}`);
    }

    return (
        <>
            {props.products.map((item, index) => {
                return <LinkedP key={index} onClick={() => goToCallback(item.id)}>{item.name}</LinkedP>
            })}
        </>
    );
}

export default Home;