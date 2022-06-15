import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
border-radius: 5px;
display: grid;
height: 30%;
grid-template-columns: repeat(3, 1fr);
grid-auto-rows: minmax(50px, auto);
grid-gap: 10px;
max-width: 960px;
margin: 10px auto 0 auto;
background: grey;
grid-template-areas:
    "photo title title"
    "photo . ."
    "photo go delete"
`

export const Photo = styled.div`
grid-area: photo;
 background: coral;
 img{
    width: 100%;
    height: 100%;
}
`

export const Title = styled.div`
grid-area: title;
 p{
    text-align: center;
    font-weight: bold;
    line-height: 100px;
 }
`

export const DelBtn = styled.button`
grid-area: delete;
border: 2px solid red;
border-radius: 25px;
background: red;
color: white;
cursor: pointer;
width: 50%;
`

export const GoBtn = styled.button`
grid-area: go;
border: 2px solid blue;
border-radius: 25px;
background: blue;
color: white;
cursor: pointer;
width: 50%;
`
export const CardLink = styled(Link)`
grid-area: go;
border: 2px solid blue;
border-radius: 25px;
background: blue;
color: white;
cursor: pointer;
width: 50%;
text-decoration: none;
p{
    text-align: center;
    line-height: 50px;
}
`