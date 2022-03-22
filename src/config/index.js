module.exports = {
  databaseUrl: process.env.DATABASE_URL,
  discogsApiToken: process.env.DISCOGS_API_TOKEN,
  logLevel: process.env.LOG_LEVEL,
  port: Number(process.env.PORT),
}
