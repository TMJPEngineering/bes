/* global Route, tmj, namespace */

export default () => {
    namespace(tmj.config.namespace.welcome);

    Route.view('/', 'welcome.index');
    Route.get('/test', 'WelcomeController@test', ['auth']);
    Route.view('/home', 'welcome.index');
    Route.view('/login', 'welcome.index');
};
