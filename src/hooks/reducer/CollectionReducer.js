export const CollectionReducer = (state, action) => {
    switch(action.type){
        case 'ADD_ANIME':
            var idx = 0;
            let idAni = action.col.animeId;
            for(let i=0;i<state.length;i++){
                if(state[i].CollectionName == action.col.name){
                    // state[i].ids.push(action.col.animeId);
                    idx = i+1;
                }
            }
            var tempIds = state[idx-1].ids;

            // tempIds.push(animeId);
            tempIds = [
                ...tempIds,
                idAni
            ]

            return [
                ...state.filter(st => st.id !== idx), {id: idx, CollectionName: action.col.name, ids: tempIds}
            ]
        case 'CREATE_COLLECTION':
            var id = state.length + 1;
            
            return [...state, {
                id: id,
                CollectionName: action.CollectionList.name,
                ids: []
            }]
        case 'DELETE_COLLECTION':
            return state.filter(col => col.id !== action.id)
        case 'REMOVE_ANIME':
            var idx=0;
            var animId = action.col.animeId;

            for(var i=0;i<state.length;i++){
                if(state[i].CollectionName == action.col.name){
                    idx = i+1;
                    console.log("Catched");
                }
            }

            const indexValue = state[idx-1].ids.indexOf(animId);
            var tempIds = state[idx-1].ids;
            console.log(indexValue);
            if(indexValue>-1){
                tempIds.splice(indexValue, 1)
            }

            return [
                ...state.filter(st => st.id !== idx), {id: idx, CollectionName: action.col.name, ids: tempIds}
            ]
        default:
            return state;
    }
}