const proxy = require('http-proxy-middleware');
     
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
    app.use(proxy('/auth/facebook', { target: 'http://localhost:5000' }));
    app.use(proxy('/auth/firebase', { target: 'http://localhost:5000' }));
    app.use(proxy('/auth/*', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
    app.use(proxy('/api', { target: 'http://localhost:5000' }));
    app.use(proxy('/auth', { target: 'http://localhost:5000' }));
    app.use(proxy('/api/surveys/*/*', { target: 'http://localhost:5000' }));
    app.use(proxy('/client/*', { target: 'http://localhost:5000' }));

}