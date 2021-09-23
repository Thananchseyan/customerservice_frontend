import {gql} from '@apollo/client';

export const VIEW_MODERATORS = gql`
    query {
        showDistricts {
            id
            province {
            id
            }
          }
    }
`;