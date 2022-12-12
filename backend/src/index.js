"use strict";

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  bootstrap() {},
  register({ strapi }) {
    const { toEntityResponseCollection } = strapi
      .plugin("graphql")
      .service("format").returnTypes;
    const extensionService = strapi.service("plugin::graphql.extension");

    extensionService.use(({ strapi }) => ({
      typeDefs: `
    type Query {
      tvShow(slug: String!): TvShowEntityResponse
    }
  `,
      resolvers: {
        Query: {
          tvShow: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;
              console.log(toEntityResponse);

              const data = await strapi.services["api::tv-show.tv-show"].find({
                filters: { slug: args.slug },
              });

              const response = toEntityResponse(data.results[0]);

              console.log("##################", response, "##################");

              return response;
            },
          },
        },
      },
    }));

    extensionService.use(({ nexus }) => ({
      types: [
        nexus.extendType({
          type: "UsersPermissionsMe",
          definition(t) {
            t.field("watchlist", {
              type: "MovieEntityResponseCollection",
              resolve: async (root, args) => {
                const userData = await strapi.db
                  .query("plugin::users-permissions.user")
                  .findOne({
                    select: [], // watchlist are there due to populate
                    where: { id: root.id },
                    populate: { watchlist: true },
                  });
                return toEntityResponseCollection(userData.watchlist ?? [], {
                  args,
                  resourceUID: "api::movie.movie",
                });
              },
            });
          },
        }),
      ],
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap() {},
};
