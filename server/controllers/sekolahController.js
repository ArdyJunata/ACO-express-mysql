const Sekolah = require('../models/sekolahModel'),
    bcrypt = require('bcryptjs');

exports.sekolahFindAll = async (req, res) => {
    try {
        const sekolah = await Sekolah.all()
        res.status(200).json({
            sekolah,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.sekolahFindById = async (req, res) => {
    try {
        const id = req.params.id
        const sekolah = await Sekolah.one(id)
        res.status(200).json({
            sekolah,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}


exports.sekolahFindBylokasi = async (req, res) => {
    try {
        const id = req.params.id
        const sekolah = await Sekolah.role(id)
        res.status(200).json({
            sekolah,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.sekolahFindById = async (req, res) => {
    try {
        const id = req.params.id
        const sekolah = await Sekolah.one(id)
        res.status(200).json({
            sekolah,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.sekolahDelete = async (req, res) => {
    try {
        const id = req.params.id
        await Sekolah.delete(id)
        res.status(200).json({
            message: 'delete success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.sekolahUpdate = async (req, res) => {
    try {
        const id_sekolah = req.params.id
        const body = req.body
        const data = {
            nama_sekolah: body.nama_sekolah,
            foto_sekolah: "",            
            latitude: body.latitude,
            longitude: body.longitude,
            kontak_sekolah: body.kontak_sekolah,
            alumni_sekolah: body.alumni_sekolah,
            alamat_lengkap: body.alamat_lengkap,
            id_petugas: body.id_petugas,
        }

        await Sekolah.update(id_sekolah, data)
        res.status(200).json({
            sekolah: data,
            message: 'update success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.sekolahCreate = async (req, res) => {
    try {
        const body = req.body
        const data = {
            nama_sekolah: body.nama_sekolah,
            foto_sekolah: "",            
            latitude: body.latitude,
            longitude: body.longitude,
            kontak_sekolah: body.kontak_sekolah,
            alumni_sekolah: body.alumni_sekolah,
            alamat_lengkap: body.alamat_lengkap,
            id_petugas: body.id_petugas
        }

        await Sekolah.create(data)
        res.status(200).json({
            message: 'addsekolah success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

// exports.sekolahCount = async (req, res) => {
//     try {
//         const id = req.params.id

//         const data = await sekolah.count(id)
//         res.status(200).json({
//             data
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         })
//     }
// }
