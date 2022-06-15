/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useEffect, useState } from 'react';
import AnimeList from '../../components/AnimeList';
import SearchTool from '../../components/SearchTool/SearchTool';
import { useAnimeList } from '../../hooks/graphql/useAnimeList';

const Home = () => {
    const [text, setText] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    const { getAnimeList, error, data, loading } = useAnimeList(pageNumber, 10, text);

    useEffect(() => {
        getAnimeList();
    }, []);

    let inputHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setText(lowerCase);
        getAnimeList();
      };

    console.log({
        error,
        data,
        loading,
        text
    });

    return (
        <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;

        `}>
            <div>
                <SearchTool inputHandler={inputHandler}/>
            {error && <div>{error}</div>}
            {loading && 
            <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90vh;
            `}>Loading...</div>
            }
            
            {data && 
                <AnimeList data={data}/>              
            }
            </div>
            
        </div>
    );
}

export default Home;