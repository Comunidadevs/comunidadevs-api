// eslint-disable-next-line @typescript-eslint/no-var-requires
const { env } = require('./src/config');

// eslint-disable-next-line no-undef
dbInstance = db.getSiblingDB('admin');
// eslint-disable-next-line no-undef
dbInstance.createUser({
  user: env.MONGO_USER,
  pwd: env.MONGO_PASSWORD,
  role: [
    {
      role: 'readWrite',
      db: env.MONGO_DATABASE,
    },
  ],
});
