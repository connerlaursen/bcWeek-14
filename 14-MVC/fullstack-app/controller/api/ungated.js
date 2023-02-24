const router = require("express").Router();
const checkDate = require("../../utils/checkDate")



router.get('/', checkDate, (req, res) => {
    //date  
    // return only the day name

    req.session.save(() => {
        req.session.newValue = "custom value"
        res.render("content", { name: "Alex" })
    })

})
router.get('/profile', (req, res) => {
    res.render("profile")
})
router.get('/settings', (req, res) => {

    res.render("settings")
})
module.exports = router;

