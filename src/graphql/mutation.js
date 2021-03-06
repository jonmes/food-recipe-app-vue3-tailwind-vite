import gql from 'graphql-tag'

export const post_recipe = {
    mutation: gql`
        mutation (
            $name: String
            $image: _text
            $category: String
            $prep_time: Int
            $calories: Int
            $servings: Int
            $ingrediant: _text
            $steps: _text
            $description: String
            $user_id: String
        ) {
            insert_recipes_one(
                object: {
                    name: $name
                    image: $image
                    category: $category
                    prep_time: $prep_time
                    calories: $calories
                    servings: $servings
                    ingrediant: $ingrediant
                    steps: $steps
                    description: $description
                    user_id: $user_id
                }
            ) {
                name
                image
                category
                prep_time
                calories
                servings
                ingrediant
                steps
                description
                user_id
            }
        }
    `,
}

export const delete_recipe = {
    mutation: gql`
        mutation ($id: Int!) {
            delete_recipes_by_pk(id: $id) {
                id
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

export const create_comment = {
    mutation: gql`
        mutation ($comment: String, $recipe_id: Int, $user_id: String) {
            insert_comments_one(
                object: {
                    comment: $comment
                    recipe_id: $recipe_id
                    user_id: $user_id
                }
            ) {
                comment
            }
        }
    `,
}

export const rate_recipe = {
    mutation: gql`
        mutation ($recipe_id: Int, $user_id: String, $rating_val: Float) {
            insert_ratings_one(
                object: {
                    recipe_id: $recipe_id
                    user_id: $user_id
                    rating_val: $rating_val
                }
            ) {
                user_id
                rating_val
                recipe_id
            }
        }
    `,
}

export const user_favorite = {
    mutation: gql`
        mutation ($user_id: String, $recipe_id: Int) {
            insert_favorites_one(
                object: { user_id: $user_id, recipe_id: $recipe_id }
            ) {
                recipe {
                    id
                    name
                    image
                    avg_rating
                }
            }
        }
    `,
}
