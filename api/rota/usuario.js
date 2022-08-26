var express = require("express");
var router = express.Router();
var { init } = require("../controle/usuario");

router.get("/usuario", init);

module.exports = router;