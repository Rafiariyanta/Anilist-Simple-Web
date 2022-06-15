/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
    Container,
    Title
} from './CollectionDetailElements'
import { useContext } from 'react';
import { CollectionContext } from '../../hooks/context/CollectionContext';
import { useParams } from 'react-router-dom';
import { useCollectionList } from '../../hooks/graphql/useCollectionList'
import CollectionCard from '../../components/Card/CollectionCard';


const CollectionDetail = () => {
    const { id } = useParams();
    const { collection } = useContext(CollectionContext);
    const selectCol = collection[id - 1];
    const { error, data, loading } = useCollectionList(1, selectCol.ids.length, selectCol.ids);
    console.log(data);
    const handleDelete = () => {
        console.log("delBtn Clicked");
    }
    return (
        <div>
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
                <Container>
                    <Title>
                        <p>{selectCol.CollectionName}</p>
                    </Title>
                    {data.Page.media.map(datas => (
                        <CollectionCard name={datas.title.romaji} handleDelete={handleDelete} id={datas.id} type={"anime"} key={datas.id} />
                    ))
                    }
                </Container>
            }
        </div>

    );
}

export default CollectionDetail;