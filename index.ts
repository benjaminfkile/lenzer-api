process.on("uncaughtException", function (err) {
  console.error(err)
  console.log("Node NOT Exiting...")
})

import dotenv from "dotenv"
const app = require("./src/app")
const knex = require("knex")

dotenv.config()

const db = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  }
})

app.set("db", db)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})