import { useQuery, gql } from '@apollo/client';

const GET_ANIME_LIST = gql`
query ($id: Int)  { 
    Media (id: $id) {
      id
      title {
        romaji
      }
      coverImage{
          large
      }
      status
      description
      bannerImage
      startDate{
          day
          month
          year
      }
      endDate{
          day
          month
          year
      }
      episodes
      genres
      studios{
          edges{
              node{
                  name
              }
          }
      }
      characters{
        edges{
            node{
                id
                name{
                    full
                }
            }
        }
    }
    }
  }
`

export const useAnimeDetail = (id) => {
    const { error, data, loading } = useQuery(GET_ANIME_LIST, {
        variables: {
            id
        }
    });

    return {
        error,
        data,
        loading
    }
}