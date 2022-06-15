import{
    ModalBackground,
    ModalContainer,
    TitleCloseBtnContainer,
    TitleCloseBtn,
    Title,
    Body,
    Footer,
    ChooseBtn
} from './ModalConfirmationElements'

const ModalConfirmation = ({ setOpenModal }) => {
    return ( 
        <ModalBackground>
            <ModalContainer>
                <TitleCloseBtnContainer>
                    <TitleCloseBtn onClick={() => setOpenModal(false)}>
                        X
                    </TitleCloseBtn>
                </TitleCloseBtnContainer>
                <Title>
                    <h1>Are you sure?</h1>
                </Title>
                <Body>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit maiores magnam dolore. Amet, ex. Ea ab laudantium eligendi facere nesciunt eius voluptatem voluptatibus aliquam aliquid! Sit vitae voluptatem accusantium. Unde.</p>
                </Body>
                <Footer>
                    <ChooseBtn>
                        Cancel
                    </ChooseBtn>
                    <ChooseBtn>
                        Sure
                    </ChooseBtn>
                </Footer>
            </ModalContainer>
        </ModalBackground>
     );
}
 
export default ModalConfirmation;