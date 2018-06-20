import schemas from '@graphql-global/schemas';
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as express from 'express';
import { Express } from 'express';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import { Db, MongoClient } from 'mongodb';
import { DB_NAME, MONGO_URL } from './config';

export async function initServer() {
  const app: Express = express();

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(compression());

  const connection = await MongoClient.connect(MONGO_URL.split('==').join('%3D%3D'));
  const db: Db = await connection.db(DB_NAME);

  app.use(
    '/graphql',
    graphqlExpress(async () => ({
      schema: schemas,
      context: {
        db,
      },
    })),
  );

  // serve graphiQL
  app.use(
    '/graphiql',
    graphiqlExpress({
      endpointURL: '/graphql',
      query: '',
    }),
  );

  app.listen({ port: 3000 as number }, () => {
    // tslint:disable-next-line
    console.log('View GraphiQL at http://localhost:3000/graphiql');
  });
}
