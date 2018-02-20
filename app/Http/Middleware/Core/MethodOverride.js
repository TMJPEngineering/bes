import methodOverride from 'method-override';

module.exports = (app) => {
    app.use(methodOverride('X-HTTP-Method-Override'));
};
