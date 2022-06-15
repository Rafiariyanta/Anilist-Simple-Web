import {
    AddColContainer,
    AddColBtn
} from './AddToCollectionElements'

const AddToCollection = ({ text, handleClick }) => {
    return ( 
        <AddColContainer>
            <AddColBtn onClick={() => handleClick()}> {text} </AddColBtn> 
        </AddColContainer>
     );
}
 
export default AddToCollection;