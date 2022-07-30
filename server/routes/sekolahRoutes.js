const express = require('express'),
verify = require('../controllers/authVerify'),
multer = require('multer');
const {
    sekolahFindAll,
    sekolahCreate,
    sekolahUpdate,
    sekolahDelete,
    sekolahFindById,
    acoSorting
} = require('../controllers/sekolahController')

const router = express.Router()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images/')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now().toString() + "-" + file.originalname)
    }
})

const upload = multer({storage: storage})

router.post("/", upload.single('foto_sekolah'), verify, sekolahCreate)
router.get("/", verify, sekolahFindAll)
router.post("/:id", verify, sekolahUpdate)
router.delete("/:id", verify, sekolahDelete)
router.get("/:id", verify, sekolahFindById);
router.post("/sorting/location", verify, acoSorting);

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