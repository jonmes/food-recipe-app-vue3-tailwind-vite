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
