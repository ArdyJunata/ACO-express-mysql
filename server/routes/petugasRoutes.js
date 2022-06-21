const express = require('express'),
verify = require('../controllers/authVerify');

const {
    petugasFindAll,
    petugasFindById,
    petugasDelete,
    petugasUpdate,
    petugasCreate,
    petugasLogin,
    // petugasCount,
    // petugasFindByRole
} = require('../controllers/petugasController')

const router = express.Router()

router.get("/", verify, petugasFindAll)

router.get("/:id", verify, petugasFindById)

// router.get("/role/:id", petugasFindByRole)

router.delete("/:id", verify, petugasDelete)

router.put("/:id", verify, petugasUpdate)

router.post("/", petugasCreate)

// router.get("/count/:id", petugasCount)

router.post("/login", petugasLogin)

module.exports = router