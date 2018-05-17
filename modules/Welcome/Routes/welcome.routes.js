/* global Route, modules, namespace */

export default () => {
    namespace(modules.welcome);

    Route.view('/', 'welcome.index', ['guest']);
    Route.get('/test', 'WelcomeController@test', ['guest']);
};
