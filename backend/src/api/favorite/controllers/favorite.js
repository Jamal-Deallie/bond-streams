"use strict";

/**
 * favorite controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController('api::favorite.favorite');

module.exports = createCoreController(
  "api::favorite.favorite",

  ({ strapi }) => ({
    async create(ctx, next) {
      // get user from context
      const user = ctx.state.user;
      // get request body data from context
      const { movies } = ctx.request.body.data;
      console.log(movies);
      // use the create method from Strapi enitityService
      const favorites = await strapi.entityService.create(
        "api::favorite.favorite",
        {
          data: {
            movies,
            // pass in the owner id to define the owner
            user: user.id,
          },
        }
      );
      return { favorites };
    },
  })
);
