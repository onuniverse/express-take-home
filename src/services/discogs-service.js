const superagent = require("superagent")

const { discogs } = require("../config")

const searchArtist = (query) => superagent
  .get(`${discogs.baseUrl}/database/search`)
  .set("Authorization", `Discogs token=${discogs.apiToken}`)
  .set("Accept", "application/json")
  .query({ q: query })
  .then((res) => res.body.results)

module.exports = {
  searchArtist,
}
