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

export const get_recipe_by_id = {
    query: gql`
        query MyQuery($id: Int!) {
            recipes_by_pk(id: $id) {
                description
                id
                image
                avg_rating
                calories
                category
                ingrediant
                name
                posted_at
                prep_time
                rating_count
                servings
                steps
                user_id
                comments {
                    comment
                    user{
                        name
                    }
                }
                user {
                    name
                }
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
                image
                avg_rating
            }
        }
    `,
}

export const get_recipes = {
    query: gql`
        query MyQuery {
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
                user_id
                user {
                    name
                    avatar
                }
            }
        }
    `,
}

export const comments = {
    query: gql`
        query MyQuery($id: Int!) {
            recipes_by_pk(id: $id) {
                description
                id
                image
                avg_rating
                calories
                category
                ingrediant
                name
                posted_at
                prep_time
                rating_count
                servings
                steps
                user_id
                comments {
                    comment
                    user {
                        name
                    }
                }
                user {
                    name
                }
            }
        }
    `,
}
