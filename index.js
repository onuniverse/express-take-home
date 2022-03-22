const { port } = require("./src/config")
const app = require("./src/app")

let server = app.listen(port, () => console.log(`Express server listening on port ${port}...`))

const shutdown = (signal) => {
  console.log(`Received signal ${signal}`)

  if (server) {
    console.log("Shutting down express server")
    server.close(() => {
      console.log("Closed express server")
      server = null
    })
  } else {
    console.log("No running express server")
  }
}

process.on("SIGINT", () => shutdown("SIGINT"))
process.on("SIGTERM", () => shutdown("SIGTERM"))
