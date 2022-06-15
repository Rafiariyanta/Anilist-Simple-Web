/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useParams } from "react-router-dom";
import AddToCollection from '../../components/AddToCollection/AddToCollection';
import { useAnimeDetail } from "../../hooks/graphql/useAnimeDetail";
import { CollectionContext } from '../../hooks/context/CollectionContext';
import ModalForm from '../../components/Modal/ModalForm';
import {
    DetailContainer,
    Banner,
    Photo,
    Title,
    AddCol,
    Overview,
    Character,
    Episode,
    Detail
} from './AnimeDetailElements'
import { useContext, useEffect, useState } from 'react';
import ModalChoose from '../../components/Modal/ModalChoose';

const AnimeDetail = () => {
    const { id } = useParams();
    const { error, data, loading } = useAnimeDetail(id);
    const { collection, dispatch } = useContext(CollectionContext);
    const [filteredList, setFilteredList] = useState(null);
    const [availableCol, setAvailableCol] = useState(null);
    const [selectState, setSelectState] = useState("overview");
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const [modalChooseOpen, setModalChooseOpen] = useState(false);

    const handleInputForm = async (name) => {
        dispatch({type: 'CREATE_COLLECTION', CollectionList: {name: name}})
        // var selectedCol = collection.filter(
        //     (col) => col.CollectionName === name
        // )
        // console.log(selectedCol);
        dispatch({type: 'ADD_ANIME', col: {name: name, animeId: data.Media.id}});
        setModalFormOpen(false);
    }

    const handleInputChoose = (name) => {
        dispatch({type: 'ADD_ANIME', col: {name: name, animeId: data.Media.id}});
    }


    const handelAddCol = () => {
       if(filteredList.length == 0){
        setModalFormOpen(true)
       }else{
        setModalChooseOpen(true)
       }
    }
    useEffect(() => {
        if(data){
            console.log(data);
            const filterCollection = (collections) => {
                var filteredCollection = collections.filter(
                    (col) =>
                        col.ids.includes(data.Media.id)
                )

                return filteredCollection;
            }
            var filteredData = filterCollection(collection);
            setFilteredList(filteredData);
        }  
    }, [data])
    return (
        <div>
            {modalChooseOpen &&
                <ModalChoose filteredList={filteredList} id={id} setOpenModal={setModalChooseOpen} handleInputChoose={handleInputChoose}/>
            }
            {modalFormOpen &&
                <ModalForm setOpenModal={setModalFormOpen} handleInput={handleInputForm}/> 
            }
            {error && <div>{error}</div>}
            {
                loading &&
                <div css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            height: 90vh;
            `}>Loading...</div>
            }
            {
                data &&
                <DetailContainer>
                    <Banner>
                        <img src={data.Media.bannerImage} alt="" />
                    </Banner>
                    <Photo>
                        <img src={data.Media.coverImage.large} alt="" />
                    </Photo>
                    <Title>
                        <p>{data.Media.title.romaji}</p>
                    </Title>
                    <AddCol>
                    <p>Collection: </p>
                        {filteredList &&
                            filteredList.map(list => (
                                <p>
                                    {list.CollectionName}
                                </p>
                            ))
                        }
                        <AddToCollection text={"Add to Collection"} handleClick={handelAddCol} />
                        
                        
                    </AddCol>
                    <Overview>
                        <a onClick={() => setSelectState("overview")}>Overview</a>
                    </Overview>
                    <Character>
                        <a onClick={() => setSelectState("character")}>Character</a>
                    </Character>
                    <Episode>
                        <a onClick={() => setSelectState("episode")}>Episode</a>
                    </Episode>
                    <Detail>
                        {selectState === "overview" &&
                            <p>{data.Media.description}</p>
                        }
                        {selectState === "character" &&
                            // <p>CHARACTER</p>
                            data.Media.characters.edges.map(char => (
                                <p key={char.node.id}>{char.node.name.full}</p>
                            ))
                        }
                        {selectState === "episode" &&
                            <p>{data.Media.episodes}</p>
                        }
                    </Detail>
                </DetailContainer>
            }
        </div>
    );
}

export default AnimeDetail;