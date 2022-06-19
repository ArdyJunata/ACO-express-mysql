const express = require('express'),
verify = require('../controllers/authVerify');

const {
    userFindAll,
    userFindById,
    userDelete,
    userUpdate,
    userCreate,
    userLogin,
    // userCount,
    // userFindByRole
} = require('../controllers/userController')

const router = express.Router()

router.get("/", verify, userFindAll)

router.get("/:id", verify, userFindById)

// router.get("/role/:id", userFindByRole)

router.delete("/:id", verify, userDelete)

router.put("/:id", verify, userUpdate)

router.post("/", userCreate)

// router.get("/count/:id", userCount)

router.post("/login", userLogin)

module.exports = router