/* global Route */

export default () => {
    Route.setModule('Welcome');

    Route.get('/', 'WelcomeController@index');
};
