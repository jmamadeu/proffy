import { connectToSqliteDatabase } from './database';
import express from 'express';

connectToSqliteDatabase();

const app = express();

export default app;
