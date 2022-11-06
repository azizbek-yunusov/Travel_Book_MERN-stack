const { Router } = require("express");
const router = Router();
const {
  getAllTravels,
  getTravelById,
  addTravelBook,
  updateTravelBook,
  removeTravelBook,
} = require("../controllers/travelConterollers");

// CRUD
// read
router.get("/", getAllTravels);

// get one travel book
router.get("/:id", getTravelById);

// add travel book
router.post("/add", addTravelBook);

// update travel book
router.put("/:id", updateTravelBook);

// update travel book
router.delete("/:id", removeTravelBook);

module.exports = router;
