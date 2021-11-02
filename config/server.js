module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron :{
    enabled: true
  },
  proxy: env.bool('IS_PROXIED', true),
  url: env('PUBLIC_URL', 'https://test.lcrehlingen.de/api/strapi'),
  admin: {
    url: env('PUBLIC_ADMIN_URL', 'https://test.lcrehlingen.de/admin'),
    auth: {
      secret: env('ADMIN_JWT_SECRET', '74e98953e4680255e0d8a85e410f9a33'),
    },
  },
});
