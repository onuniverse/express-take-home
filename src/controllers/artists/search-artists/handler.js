const { searchArtist } = require("../../../services/discogs-service")

module.exports = async (req, res) => {
  const { q } = req.query

  const artists = await searchArtist(q)

  res.json(artists)
}
