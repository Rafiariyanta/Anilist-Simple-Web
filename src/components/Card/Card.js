import {
    CardContainer,
    CardLink
} from "./CardElements"

const Card = ({ link, title, id }) => {
    return (
        <CardLink to={`/anime/${id}`}>
            <CardContainer>
                <img src={link} alt="" />
                <p>{title}</p>
            </CardContainer>
        </CardLink>


    );
}

export default Card;