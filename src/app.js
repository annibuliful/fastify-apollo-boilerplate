import logger from './logger';

import server from './graphql';

const app = require('fastify')();

export default async () => {
  app.register(server.createHandler());
  try {
    await app.listen(3000);
    logger.info('Listening 3000');
  } catch (e) {
    logger.error(e);
    process.exit(0);
  }
};
