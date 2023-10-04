const express = require("express")
const path = require("path")
const routes = require("./Routes")
const createTable = require("./helpers/createTable")

const PORT = 3000

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static("public"));

app.use(routes)

createTable()
    .then(() => {
        app.listen(PORT, () => {
            console.log("Listening to Port " + PORT);
        });
    })
    .catch(error => {
        console.error("Error initializing the database table:", error);
    });


