module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  discogs: {
    apiToken: process.env.DISCOGS_API_TOKEN,
    baseUrl: "https://api.discogs.com",
  },
  logLevel: process.env.LOG_LEVEL,
  port: Number(process.env.PORT),
}
