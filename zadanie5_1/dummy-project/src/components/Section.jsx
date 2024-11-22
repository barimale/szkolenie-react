import Description from "./Description";
import Title from "./Title";

const Section = (props) => {
    return (
        <section>
            <Title title={props.title} />
            <img alt={props.imgProps.alt} src={props.imgProps.src} />
            <Description description={props.description} />
        </section>
    );
}

export default Section;