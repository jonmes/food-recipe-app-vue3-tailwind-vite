const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
// const sequelize = require("sequelize")

app.use(express.json());
const POSTGRES_CONNECTION_STRING = "postgres://postgres:postgrespassword@localhost:5432/postgres"


app.post("/recipes_rating_events", async(req, res)=> {
    console.log(req.body.event.data.new);

    const recipe_id = req.body.event.data.new.recipe_id;

    const sequelize = new Sequelize(POSTGRES_CONNECTION_STRING, {});

    await sequelize.query("UPDATE recipes set avg_rating = rating_avg(:recipe_id) where id = :recipe_id;",{
        replacements: {
            recipe_id
        }
    })
    res.status(200);
})


const server = app.listen(8000, () => {
    console.log("server listening on port 8000");
});