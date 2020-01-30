module.exports = {
  init(app) {
    const foodRoutes = require("../routes/food");
    const kitchenRoutes = require("../routes/kitchen");
    const foodTableRoutes = require("../routes/foodTable");
    const testRoutes = require("../routes/test");

    app.use(foodRoutes);
    app.use(kitchenRoutes);
    app.use(foodTableRoutes);
    app.use(testRoutes);
  }
};
