import './bootstrap/env';
import './bootstrap/helpers';
import onLoadDatabase from './bootstrap/database';
import DatabaseSeeder from './database/seeds/DatabaseSeeder';

onLoadDatabase(async () => {
    let databaseSeeder = new DatabaseSeeder();
    console.log('Seed started');
    await databaseSeeder.run();
    console.log('Seed ended');
    process.exit();
});
