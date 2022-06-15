import styled from '@emotion/styled'

export const DetailContainer = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(100px, auto);
    grid-gap: 10px;
    max-width: 960px;
    margin: 10px auto 0 auto;
    grid-template-areas:
        "banner banner banner"
        "photo title title"
        "photo addCol addCol"
        "overview character episode"
        "detail detail detail"         
`

export const Banner = styled.div`
    grid-area: banner;

    img{
        width: 100%;
        height: 100%;
    }

`

export const Photo = styled.div`
    grid-area: photo;

    img{
        width: 100%;
        height: 100%;

        justify-content: center;
        align-items: center;

    }

`

export const Title = styled.div`
    grid-area: title;
    border: 2px solid black;
    p{
        text-align: center;
        line-height: 500%;
        font-weight: bold;
    }


`

export const AddCol = styled.div`
    grid-area: addCol;
    border: 2px solid black;

`

export const Overview = styled.div`
    grid-area: overview;
    border-top: 5px solid;
    text-align: center;

    a{
        cursor: pointer;
    }

`

export const Character = styled.div`
    grid-area: character;
    border-top: 5px solid;
    text-align: center;

    a{
        cursor: pointer;
    }
`

export const Episode = styled.div`
    grid-area: episode;
    border-top: 5px solid;
    text-align: center;

    a{
        cursor: pointer;
    }
`

export const Detail = styled.div`
    grid-area: detail;
    border: 2px solid black;
    overflow: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    -ms-overflow-style: none;  // IE and Edge
  scrollbar-width: none;

`