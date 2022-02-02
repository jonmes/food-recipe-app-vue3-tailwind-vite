import gql from 'graphql-tag'

export const user_data = {
    query: gql`
        query User {
            user {
                id
                name
                avatar
                role
            }
        }
    `,
}

export const user_account = {
    query: gql`
        query User($id: String!) {
            user_by_pk(id: $id) {
                name
                avatar
            }
        }
    `,
}
export const user_post = {
    query: gql`
        query Post($id: String!) {
            recipes(where: { user_id: { _eq: $id } }) {
                id
                name
                posted_at
            }
        }
    `,
}

