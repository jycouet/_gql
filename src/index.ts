import { initServer } from './server';

initServer().catch(e => {
  // tslint:disable-next-line
  console.error('Unable to start server: ', e);
});
