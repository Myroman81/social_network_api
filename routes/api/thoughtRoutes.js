
const router = require('express').Router()

// every route starts with '/api/thoughts'
router.get('/', (req, res) => {
    res.send("Hit Thoughts Route ...")
})



module.exports = router;