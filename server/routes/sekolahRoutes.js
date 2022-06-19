const express = require('express'),
verify = require('../controllers/authVerify');
const {
    sekolahFindAll,
    sekolahCreate,
    sekolahUpdate,
    sekolahDelete,
    sekolahFindById
} = require('../controllers/sekolahController')

const router = express.Router()

router.post("/", verify, sekolahCreate)
router.get("/", verify, sekolahFindAll)
router.post("/:id", verify, sekolahUpdate)
router.delete("/:id", verify, sekolahDelete)
router.get("/:id", verify, sekolahFindById)

// const {
//     sekolahFindAll,
//     sekolahFindById,
//     sekolahDelete,
//     sekolahUpdate,
//     sekolahCreate,
//     sekolahCount,
//     sekolahFindByRole
// } = require('../controllers/sekolahController')

// const router = express.Router()

// router.get("/", sekolahFindAll)

// router.get("/:id", sekolahFindById)

// router.get("/role/:id", sekolahFindBylokasi)

// router.delete("/:id", sekolahDelete)

// router.post("/:id", sekolahUpdate)

// router.post("/", sekolahCreate)

// router.get("/count/:id", sekolahCount)

module.exports = router