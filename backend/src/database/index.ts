import 'reflect-metadata';

import { createConnection } from 'typeorm';

async function connectToSqliteDatabase() {
  return createConnection()
    .then((res) => console.log('Database connected', res.name))
    .catch((err) => console.log('error', err.message));
}

export { connectToSqliteDatabase };
