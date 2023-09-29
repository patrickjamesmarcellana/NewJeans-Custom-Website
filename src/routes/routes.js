const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("index", {
        title: "HomePage",
        css: "index.css"
    })
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
        css: "index.css"
    })
})

module.exports = router