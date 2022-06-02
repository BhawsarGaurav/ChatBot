const express = require("express");
const router = express.Router();

const {
  runSample,
  createInt,
  getListIntent,
  updateIntent,
} = require("../Controllers/chatBotController");
const { handleWebhook } = require("../Controllers/webhook");
router.post("/runSample", runSample);
router.post("/createIntent", createInt);
router.get("/getListIntent", getListIntent);
router.put("/updateIntent", updateIntent);
router.post("/handleWebhook", handleWebhook);

module.exports = router;
