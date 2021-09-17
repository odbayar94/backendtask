const express = require("express");
const { createUrl, redirectUrl } = require("../controller/urlsDb");
const router = express.Router();

router.route("/url").get(createUrl);
router.route("/:id").get(redirectUrl);

module.exports = router;
