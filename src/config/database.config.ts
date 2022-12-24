export function databaseConfig(): any {
  return {
    type: 'mssql',
    host: 'localhost',
    port: 1433,
    username: 'sa',
    password: 'Hieu1234',
    database: 'nestjs-manage-book',
    synchronize: true,
    logging: false,
    autoLoadEntities: true,
    entities: ['dist/components/**/*.entity.js'],
    // migrations: ['dist/database/migrations/*.js'],
    extra: {
      options: {
        encrypt: false,
      },
    },
  };
}
