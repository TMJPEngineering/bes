import helmet from 'helmet';

module.exports = (app) => {
    app.use(helmet());
};
