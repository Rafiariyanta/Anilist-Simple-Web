import { useContext, useState } from 'react';
import CollectionCard from '../../components/Card/CollectionCard';
import ModalForm from '../../components/Modal/ModalForm';
import { CollectionContext } from '../../hooks/context/CollectionContext';
import {
    Container,
    Title,
    AddBtn
} from './CollectionListElements'


const CollectionList = () => {
    const { collection, dispatch } = useContext(CollectionContext);
    const [modalOpen, setModalOpen] = useState(false);

    const handleInput = (name) => {
        dispatch({type: 'CREATE_COLLECTION', CollectionList: {name: name}})
    }

    const handleDelete = (id) => {
        dispatch({type: 'DELETE_COLLECTION', id: id})
    }

    return (
        <div>
            { modalOpen &&
                <ModalForm setOpenModal={setModalOpen} handleInput={handleInput}/> 
            }
            <Container>
                <Title>
                    My Collection
                </Title>
                <AddBtn onClick={() => setModalOpen(true)}>Create Collection</AddBtn>
                {collection.map(col => (
                    <CollectionCard name={col.CollectionName} handleDelete={handleDelete} id={col.id} type={"collection"} key={col.id} />
                ))
                }
            </Container>
        </div>

    );
}

export default CollectionList;