module.exports = {
  servers: {
    one: {
      host: process.env.HOST,
      username: process.env.USERNAME,
    },
  },

  app: {
    name: 'quick-system',
    path: '../',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      ROOT_URL: process.env.ROOT_URL,
      MONGO_URL: process.env.MONGO_URL,
    },

    volumes: {
      '/data/quick/files': '/home/files',
    },

    docker: {
      image: 'abernix/meteord:node-12-base',
      args: [
        '--link=mongodb:mongodb',
      ],
    },

  },

  proxy: {
    domains: process.env.DOMAIN,

    ssl: {
      forceSSL: true,
      letsEncryptEmail: process.env.EMAIL,
    },
  },
};
