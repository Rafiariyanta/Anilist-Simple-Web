import { useContext, useEffect, useState } from 'react';
import { CollectionContext } from '../../hooks/context/CollectionContext';
import{
    ModalBackground,
    ModalContainer,
    TitleCloseBtnContainer,
    TitleCloseBtn,
    Title,
    Body,
    Footer,
    ChooseBtn,
    CollectionContainer
} from './ModalChooseElements'

const ModalChoose = ({ setOpenModal, filteredList, handleInputChoose }) => {
    const {collection} = useContext(CollectionContext);
    const [filteredLists, setFilteredLists] = useState(null);
    const [name, setName] = useState('');

    useEffect(() => {
        var data = collection.filter(
            (col) => {
                return filteredList.some((f) => {
                    return col.CollectionName !== f.CollectionName
                })
            }    
        );
        setFilteredLists(data);
    }, [])
    return ( 
        <ModalBackground>
            <ModalContainer>
                <TitleCloseBtnContainer>
                    <TitleCloseBtn onClick={() => setOpenModal(false)}>
                        X
                    </TitleCloseBtn>
                </TitleCloseBtnContainer>
                <Title>
                    <h1>Choose Collection</h1>
                </Title>
                <Body>
                    
                    {filteredLists && filteredLists.map(col => (
                        <CollectionContainer onClick={(e) => setName(e.target.innerText)} key={col.id}>{col.CollectionName}</CollectionContainer>   
                    ))}
                </Body>
                <Footer>
                    <ChooseBtn onClick={() => setOpenModal(false)}>
                        Cancel
                    </ChooseBtn>
                    <ChooseBtn onClick={() => {
                        handleInputChoose(name)
                        setOpenModal(false)
                    }}>
                        Sure
                    </ChooseBtn>
                </Footer>
            </ModalContainer>
        </ModalBackground>
     );
}
 
export default ModalChoose;