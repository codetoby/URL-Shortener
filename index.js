const express = require("express")
const routes = require("./Routes")

const PORT = 3000

const app = express()

app.use(routes)



app.listen(PORT, () => {
    console.log("Listening to Port " + PORT)
})

