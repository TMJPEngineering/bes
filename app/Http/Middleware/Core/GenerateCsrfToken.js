import csrf from 'csurf';

module.exports = (app) => {
    app.use(csrf({ cookie: true }));
};
