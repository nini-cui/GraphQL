import { useQuery, gql } from "@apollo/client"

// 1. useCharacter js file is used to query data from database
// 2. useQuery function from apollo client is called to query needed data and return 
// data, error, and loading status 

const GET_CHARACTER = gql`
    query GetCharacter($id: ID!){
        character(id: $id) {
            name
            id
            image
            episode {
                name
                episode
            }
        }
    }
    `;

export const useCharacter = (id) => {
    const {data, error, loading} = useQuery(GET_CHARACTER, {
        variables: {
            id,
        },
    });

    return {
        data,
        error,
        loading,
    };
};
