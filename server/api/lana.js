
const router = require('express').Router()
module.exports = router

router.get('/search', async (req, res, next) => {
  try {
    // const songs = await .get(`https://api.genius.com/search?q=lana+del+rey&access_token=${process.env.ACCESS_TOKEN}`)

    //res.json(songs)
  } catch (err) {
    next(err)
  }
})


// await axios.get(`https://api.genius.com/search?q=lana+del+rey&access_token=${ACCESS_TOKEN}`)