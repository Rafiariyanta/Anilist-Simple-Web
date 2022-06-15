import{
    CardContainer,
    Photo,
    Title,
    DelBtn,
    GoBtn,
    CardLink
} from './CollectionCardElements'


const CollectionCard = ({ name, handleDelete, id, type }) => {

    return ( 
        <CardContainer>
            <Photo>
                <img src={require("../../assets/defaultImage.jpg")} alt="" />
            </Photo>
            <Title>
                <p>{name}</p>
            </Title>
            <DelBtn onClick={() => handleDelete(id)}>
                <p>Delete</p>
            </DelBtn>
            <CardLink to={`/${type}/${id}`}>
                <p>See</p>
            </CardLink>
        </CardContainer>
     );
}
 
export default CollectionCard;