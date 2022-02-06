import { ConnectionOptions } from 'typeorm';
import { User } from './src/entities/user.entity';

export const ormConfigFile: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT, 10),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: [__dirname + '/**/*.ts'],
  cli: {
    entitiesDir: 'dist/entities',
    migrationsDir: 'dist/migration',
  },
};
