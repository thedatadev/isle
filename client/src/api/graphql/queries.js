import { gql } from 'apollo-boost';

const getRoomByID = gql`
    {

        room ( id: 1 ) {

            name
            modelObjects {
                id
                name
                uri
                position { x y z }
                rotation { x y z }
                scale    { x y z }
            }

        }

    }
`;

export { getRoomByID };