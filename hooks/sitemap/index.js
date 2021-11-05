module.exports = strapi => {
    const hook = {
      async initialize() {
        strapi.plugins.sitemap.services.sitemap.createSitemap();
      },
    };
    return hook;
  };