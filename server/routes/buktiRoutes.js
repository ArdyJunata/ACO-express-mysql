const express = require('express'),
verify = require('../controllers/authVerify');
const {
    buktiFindAll,
    buktiCreate,
    buktiUpdate,
    buktiDelete,
    buktiFindById
} = require('../controllers/buktiController')

const router = express.Router()

router.post("/", verify, buktiCreate)
router.get("/", verify, buktiFindAll)
router.post("/:id", verify, buktiUpdate)
router.delete("/:id", verify, buktiDelete)
router.get("/:id", verify, buktiFindById)

module.exports = router