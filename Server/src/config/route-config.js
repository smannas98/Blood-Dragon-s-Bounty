module.exports = {
    init(app) {
        const staticRoutes = require('../routes/static');
        const kitchenRoutes = require('../routes/kitchens');

        app.use(staticRoutes);
        app.use(kitchenRoutes);
    }
};