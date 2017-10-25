/* global Route, tmj, namespace */

export default () => {
    namespace(tmj.config.namespace.welcome);

    Route.view('/', 'welcome.index');
    Route.get('/home', 'WelcomeController@home');
};
