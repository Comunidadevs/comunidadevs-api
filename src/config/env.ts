const env = {
  PORT: Number(process.env.PORT_API || 3000),
  MONGO_USER: process.env.MONGO_USER || '',
  MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
  MONGO_DATABASE: process.env.MONGO_DATABASE || '',
  MONGO_HOST: process.env.MONGO_HOST || '',
  MONGO_PORT: process.env.MONGO_PORT || '',
};

export default env;
