import { Knex } from "knex"

const testService = {
    getTestItems(knex: Knex) {
        return knex.from("unity_test")
            .select("*")
            .then((rows: testTypes[]) => {
                return rows
            })
    }
}
module.exports = testService