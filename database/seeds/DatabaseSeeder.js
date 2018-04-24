import Seeder from 'bes-seeder';

import UserTableSeeder from './UserTableSeeder';

class DatabaseSeeder extends Seeder {
    async run () {
        await this.call(new UserTableSeeder());
    }
}

export default DatabaseSeeder;
