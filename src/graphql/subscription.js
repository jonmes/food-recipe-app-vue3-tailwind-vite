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

export const user_comment_sub = {
    subscription: gql`
        subscription ($id: Int) {
            comments(where: { recipe_id: { _eq: $id } }) {
                id
                comment
                recipe_id
                user {
                    name
                }
            }
        }
    `,
}

export const browse_recipes = {
    sub: gql`
        subscription {
            recipes {
                avg_rating
                calories
                category
                description
                id
                image
                ingrediant
                name
                posted_at
                prep_time
                rating_count
                servings
                steps
                user {
                    name
                }
            }
        }
    `,
}
