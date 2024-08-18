const { getMenuItems, addMenuItem, updateMenuItem, deleteMenuItem } = require("../Controllers/FoodMenuItemController");

const router = require("express").Router();

router.get("/", getMenuItems);
router.post("/", addMenuItem);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

module.exports = router;