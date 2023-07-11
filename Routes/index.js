const { Router } = require("express")

const router = Router()

router.get("/", (req, res, next) => {

    return res.render("index.ejs")

})

router.get("/:id", (req, res, next) => {

    const id = req.params.id

    if (isvalid(id)) {
        const redirect_url = getRedirect(id)
        return res.status(303).redirect(redirect_url)
    }

    return res.json({ valid: false })

})

router.post("/", (req, res, next) => {

    const url = req.body.url

    const id = generateId(url)

    return res.render("")
    
})

router.use((error, req, res, next) => {

})

module.exports = router