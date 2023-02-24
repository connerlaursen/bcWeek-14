const router = require("express").Router();

router.get('/', (req, res) => {
    console.log(req.session)
    res.json({ message: "GET /" })
})

router.get('/all', (req, res) => {
    req.session.isLoggedIn = true
    console.log(req.session)
    res.json({ message: "GET /ALL" })
})

router.get('/:id', (req, res) => {
    req.session.isLoggedIn = false
    console.log(req.session)
    res.json({ message: "GET /:ID" })
})

module.exports = router;

