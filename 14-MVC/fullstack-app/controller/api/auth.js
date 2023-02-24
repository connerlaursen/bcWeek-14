const router = require("express").Router();

router.get('/', (req, res) => {
    console.log(req.session)
    res.json({ message: "SUCCESS" })
})

router.get('/signin', (req, res) => {
    req.session.isLoggedIn = true
    console.log(req.session)
    res.json({ message: "Signed in" })
})

router.get('/signout', (req, res) => {
    req.session.isLoggedIn = false
    console.log(req.session)
    res.json({ message: "Signed out" })
})

module.exports = router;

