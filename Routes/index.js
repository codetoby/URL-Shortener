const { Router } = require("express")
const Shortener = require("../helpers/short.helpers")

const router = Router()


router.get("/:id", async (req, res, next) => {

    try {
        const { id } = req.params
        if (await Shortener.isValid(id)) {
            const redirect_url = await Shortener.getRedirect(id)
            return res.status(303).redirect(redirect_url)
        }
        return res.status(404).json({ valid: false })
    } catch (error) {
        next(error)
    }

})

router.get("/", (req, res, next) => {
    try {
        return res.render("index.ejs")
    } catch (error) {
        next(error)
    }
})



router.post("/", async (req, res, next) => {
    try {
        const url = req.body.url
        const id = await Shortener.generateId(url)
        return res.status(200).json({ id: id })
    } catch (error) {
        next(error)
    }
})

router.use((error, req, res, next) => {
    return res.status(500).json({ error: error.message })
})

module.exports = router