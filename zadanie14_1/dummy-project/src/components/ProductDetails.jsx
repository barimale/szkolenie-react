import { useParams, useNavigate } from 'react-router';

const ProductDetails = (props) => {
    const navigate = useNavigate();
    const params = useParams()
    const details = props.products.find(p => p.id === params.id);

    const goToCallback = () => {
        navigate(`/`);
    }

    return (
        <>
            <h1>Nazwa: {details.name}</h1>
            <h2>ID: {details.id}</h2>
            <button onClick={goToCallback}>Wróć</button>
        </>
    );
}

export default ProductDetails;