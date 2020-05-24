"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AutorSchema extends Schema {
  up() {
    this.create("autors", (table) => {
      table.increments();
      table.string("nome", 80);
      table.string("livro", 80);
      table.integer("preco");
      table.timestamps();
    });
  }

  down() {
    this.drop("autors");
  }
}

module.exports = AutorSchema;
