import { initServer } from './server';

initServer().catch(e => {
  console.error('Unable to start server: ', e);
});