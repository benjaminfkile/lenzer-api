"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testService = {
    getTestItems(knex) {
        return knex.from("unity_test")
            .select("*")
            .then((rows) => {
            return rows;
        });
    }
};
module.exports = testService;
