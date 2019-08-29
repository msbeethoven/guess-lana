const router = require('express').Router() 

module.exports = router

router.use('/lana', require('./lana'))
// await axios.get(`https://api.genius.com/search?q=lana+del+rey&access_token=${ACCESS_TOKEN}`)


router.use((req, res, next) => {
 const error = new Error('Not Found')
 error.status = 404
 next(error)
})
