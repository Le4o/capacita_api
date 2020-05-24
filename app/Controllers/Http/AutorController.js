"use strict";

const { get } = require("@adonisjs/framework/src/Route/Manager");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Autor = use("App/Models/Autor");
const User = use("App/Models/User");

/**
 * Resourceful controller for interacting with autors
 */
class AutorController {
  /**
   * Show a list of all autors.
   * GET autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ response, view }) {
    const autores = await Autor.all();
    return autores;
  }

  /**
   * Create/save a new autor.
   * POST autors
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const data = request.all();

    const autor = await Autor.create({
      nome: data.nome,
      livro: data.livro,
      preco: data.preco,
    });

    return autor;
  }

  /**
   * Display a single autor.
   * GET autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {}

  /**
   * Update autor details.
   * PUT or PATCH autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {}

  /**
   * Delete a autor with id.
   * DELETE autors/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {}
}

module.exports = AutorController;
