import gql from 'graphql-tag'

export const user_data = {
    query: gql`
        query User{
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

export const update_account = {
    query: gql`
        mutation ($id: String!) {
            update_user_by_pk(pk_columns: { id: $id }, _set: { name: "joni" }) {
                id
                name
            }
        }
    `,
}
