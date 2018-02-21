/* global Route, config, namespace */

export default () => {
    namespace(config.modules.welcome);

    Route.view('/', 'welcome.index', ['guest']);
};
