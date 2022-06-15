import { useLazyQuery, gql } from '@apollo/client';

const GET_ANIME_LIST = gql`
query ($id: Int,$page: Int, $perPage: Int, $search: String)  { 
    Page (page: $page, perPage: $perPage) {
    pageInfo {
        total
        currentPage
        lastPage
        hasNextPage
        perPage
    }
    media (id: $id, search: $search) {
        id
        title {
        romaji
        }
        coverImage{
            large
        }
    }
    }
}
`

export const useAnimeList = (page, perPage, text) => {
    const [getAnimeList, { error, data, loading }] = useLazyQuery(GET_ANIME_LIST, {
        variables: {
            page,
            perPage,
            search: text === "" ? null : text,
        }
    });

    return {
        getAnimeList,
        error,
        data,
        loading
    }
}