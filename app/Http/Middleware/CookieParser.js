import cookieParser from 'cookie-parser';

module.exports = cookieParser(Math.random().toString(36).substring(7));
