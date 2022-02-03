import gql from 'graphql-tag'

export const user_post_sub = {
    subscription: gql`
        subscription userRecipePost($id: String!) {
            recipes(where: { user_id: { _eq: $id } }) {
                id
                name
                posted_at
                image
                servings
                calories
                category
            }
        }
    `,
}
