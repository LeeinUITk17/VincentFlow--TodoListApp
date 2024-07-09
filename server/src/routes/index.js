const express = require('express');
const router = express.Router();

const routes = [
    { path: '/booking', handler: require('./booking') },
];

routes.forEach(route => {
    router.use(route.path,route.handler);
});


router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('server error!');
});

module.exports = router;