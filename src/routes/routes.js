const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("index", {
        title: "NewJeans",
    })
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    })
})

module.exports = router