import express from 'express';
import cors from 'cors';

import routes from './routes';
import { connectToSqliteDatabase } from './database';

connectToSqliteDatabase();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

export default app;
