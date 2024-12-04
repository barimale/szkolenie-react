import './Card.module.scss';

const Card = (props) => {
    return (
        <div className={card}>
            <h1 className={header}>{props.name} {props.surname}</h1>
            <h2 className={content}>{props.description}</h2>
        </div>
    );
}

export default Card;