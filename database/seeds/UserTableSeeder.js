/* global Models */

import Seeder from 'bes-seeder';

class UserTableSeeder extends Seeder {
    constructor () {
        super(new Models('User'));
    }

    async run () {
        // Run user table seeder
    }
}

export default UserTableSeeder;
