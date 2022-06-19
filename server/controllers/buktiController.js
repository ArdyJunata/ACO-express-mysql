const Bukti = require('../models/buktiModel'),
    bcrypt = require('bcryptjs');

exports.buktiFindAll = async (req, res) => {
    try {
        const bukti = await Bukti.all()
        res.status(200).json({
            bukti,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

// exports.buktiFindById = async (req, res) => {
//     try {
//         const id = req.params.id
//         const bukti = await Bukti.one(id)
//         res.status(200).json({
//             bukti,
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         })
//     }
// }


// exports.buktiFindBylokasi = async (req, res) => {
//     try {
//         const id = req.params.id
//         const bukti = await Bukti.role(id)
//         res.status(200).json({
//             bukti,
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         })
//     }
// }

exports.buktiFindById = async (req, res) => {
    try {
        const id = req.params.id
        const bukti = await Bukti.one(id)
        res.status(200).json({
            bukti,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.buktiDelete = async (req, res) => {
    try {
        const id = req.params.id
        await Bukti.delete(id)
        res.status(200).json({
            message: 'delete success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.buktiUpdate = async (req, res) => {
    try {
        const id_bukti = req.params.id
        const body = req.body
        const data = {
            nama_petugas: body.nama_petugas,
            foto_sekolah: "",
            nama_sekolah: body.nama_sekolah,
            jam_sampai: "",
            jam_selesai: "",
            foto_bukti: "", 
            nama_guru: body.nama_guru,
            catatan: body.catatan,
            kontak_sekolah: body.kontak_sekolah,
            deskripsi_kendala: body.deskripsi_kendala,
            foto_kendala: "",
            id_bukti: body.id_bukti
        }

        await Bukti.update(id_bukti, data)
        res.status(200).json({
            bukti: data,
            message: 'update success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.buktiCreate = async (req, res) => {
    try {
        const body = req.body
        const data = {
            nama_petugas: body.nama_petugas,
            foto_sekolah: "",
            nama_sekolah: body.nama_sekolah,
            jam_sampai: "",
            jam_selesai: "",
            foto_bukti: "", 
            nama_guru: body.nama_guru,
            catatan: body.catatan,
            kontak_sekolah: body.kontak_sekolah,
            deskripsi_kendala: body.deskripsi_kendala,
            foto_kendala: "",
            id_bukti: body.id_bukti
        }

        await Bukti.create(data)
        res.status(200).json({
            message: 'add bukti success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}
