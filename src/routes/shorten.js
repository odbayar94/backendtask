const express = require("express");
const { generateUrl, redirectUrl } = require("../controller/urls");
const router = express.Router();

router.route("/url").get(generateUrl);
router.route("/:id").get(redirectUrl);

module.exports = router;
