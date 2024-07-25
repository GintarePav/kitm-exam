const express = require("express");
const router = express.Router();
const dishController = require("../controllers/dishController");
const userController = require("../controllers/userController");

router.use(userController.protect);
router
  .route("/")
  .post(userController.restrict("admin"), dishController.createDish)
  .get(dishController.getAllDishes);

router.route("/today").get(dishController.getTodaysDishes);
router
  .route("/:dishId")
  .patch(userController.restrict("admin"), dishController.editDish)
  .delete(userController.restrict("admin"), dishController.deleteDish);

module.exports = router;
