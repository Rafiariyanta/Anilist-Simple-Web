import Card from "./Card/Card";

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
const AnimeList = ({ data }) => {

    return ( 
        <div css={css`
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr) );
            grid-gap: 50px;
            max-width: 960px;
            margin: 10px;
            justify-content: center;
            @media (max-width: 768px){
                grid-template-columns: repeat(2, 1fr);
            }
    `}>
            {data.Page.media.map(datas => (
                <div key={datas.id}>
                <Card link={datas.coverImage.large} title={datas.title.romaji} id={datas.id}/>
                </div>
            ))

            }
        </div>
     );
}
 
export default AnimeList;