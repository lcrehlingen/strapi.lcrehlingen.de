module.exports = ({ env }) => ({
    settings: {
      'upload-plugin-cache': {
        enabled: true,
        maxAge: 31536000,
        dynamic: true,
        lruCache: {
          max: 1000
        }
      }
    }
  });
  