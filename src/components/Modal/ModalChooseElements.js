import styled from '@emotion/styled'

export const ModalBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(200, 200, 200);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ModalContainer = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 12px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
    padding: 25px;
`

export const Title = styled.div`
    display: inline-block;
    text-align: center;
    margin-top: 10px;
`

export const TitleCloseBtnContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const TitleCloseBtn = styled.button`
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
`

export const Body = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
    text-align: center;
`

export const Footer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChooseBtn = styled.button`
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    background-color: cornflowerblue;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
`
export const CollectionContainer = styled.button`
    border: 2px solid black;
    border-radius: 5px;
    margin: 2px;
    cursor: pointer;

    :focus{
        background: coral;
    }

`