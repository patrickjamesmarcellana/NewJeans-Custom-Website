const router = require("express").Router()

router.get("/", (req, res) => {
    res.render("index", {
        title: "NewJeans",
        current_page: {
            home: true,
            members: false,
            discography: false,
            awards: false,
            performances: false,
            gallery: false
        }
    })
})

router.get("/members", (req, res) => {
    res.render("index", {
        title: "Members",
        current_page: {
            home: false,
            members: true,
            discography: false,
            awards: false,
            performances: false,
            gallery: false
        }
    })
})

router.get("/discography", (req, res) => {
    res.render("index", {
        title: "Discography",
        current_page: {
            home: false,
            members: false,
            discography: true,
            awards: false,
            performances: false,
            gallery: false
        }
    })
})

router.get("/awards", (req, res) => {
    res.render("index", {
        title: "Awards and Nominations",
        current_page: {
            home: false,
            members: false,
            discography: false,
            awards: true,
            performances: false,
            gallery: false
        }
    })
})

router.get("/performances", (req, res) => {
    res.render("index", {
        title: "Performances",
        current_page: {
            home: false,
            members: false,
            discography: false,
            awards: false,
            performances: true,
            gallery: false
        }
    })
})

router.get("/gallery", (req, res) => {
    res.render("index", {
        title: "NewJeans",
        current_page: {
            home: false,
            members: false,
            discography: false,
            awards: false,
            performances: false,
            gallery: true
        }
    })
})

router.use((req, res) => {
    res.render("error", {
        title: "Page Not Found",
    })
})

module.exports = router