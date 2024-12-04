import styled from "styled-components";

const CardContainer = styled.div`
  color: black;
  padding: 20px;
  border-radius: 25px;
  margin: 20px;
  border: 1px solid black;
  background-color: ${props => props.isHighlighted ? 'blue' : 'transparent'}
`;

const NameHeader = styled.h1`
    color: black;
    padding: 20px;
    border-radius: 5px;
`;

const DescriptionHeader = styled.h1`
    color: black;
    padding: 10px;
    border-radius: 5px;
`;


const ProfileCard = (props) => {
    return (
        <>
            <CardContainer isHighlighted={props.isHighlighted}>
                <NameHeader>{props.name} {props.surname}</NameHeader>
                <DescriptionHeader>{props.description}</DescriptionHeader>
            </CardContainer>
        </>
    );
}

export default ProfileCard;