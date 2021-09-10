module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  cron :{
    enabled: true
  },
  url: 'https://content.nimarion.tech',
  admin: {
    url: 'https://test.lcrehlingen.de/cms',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '74e98953e4680255e0d8a85e410f9a33'),
    },
  },
});
