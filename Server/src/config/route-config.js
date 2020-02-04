module.exports = {
  init(app) {
    // init callback function
    const staticRoutes = require('../routes/static');
    const kitchenRoutes = require('../routes/kitchens');

    app.use(staticRoutes); // use /routes/static.js route handlers
    app.use(kitchenRoutes); // use /routes/kitchens.js route handlers
  },
};
