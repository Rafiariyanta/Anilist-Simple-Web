import { useState } from 'react';
import{
    ModalBackground,
    ModalContainer,
    TitleCloseBtnContainer,
    TitleCloseBtn,
    Title,
    Body,
    Footer,
    ChooseBtn,
    InputForm
} from './ModalFormElements'

const ModalForm = ({ setOpenModal, handleInput }) => {
    const [name, setName] = useState('');
    return ( 
        <ModalBackground>
            <ModalContainer>
                <TitleCloseBtnContainer>
                    <TitleCloseBtn onClick={() => setOpenModal(false)}>
                        X
                    </TitleCloseBtn>
                </TitleCloseBtnContainer>
                <Title>
                    <h1>Create Collection</h1>
                </Title>
                <Body>
                    <InputForm placeholder='Input Name' onChange={(e => setName(e.target.value))}/>
                </Body>
                <Footer>
                    <ChooseBtn onClick={() => setOpenModal(false)}>
                        Cancel
                    </ChooseBtn>
                    <ChooseBtn onClick={() => {
                        handleInput(name)
                        setOpenModal(false)
                    }}>
                        Input
                    </ChooseBtn>
                </Footer>
            </ModalContainer>
        </ModalBackground>
     );
}
 
export default ModalForm;