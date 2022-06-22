const Petugas = require('../models/petugasModel'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken');


exports.petugasLogin = async (req, res) => {
    try {
        const petugas = await Petugas.username(req.body.username);
        if(!petugas[0]) return res.status(404).send("Incorrect username");

        const validPassword = await bcrypt.compare(req.body.password, petugas[0].password);

        if(!validPassword) return res.status(400).send("Incorrect password");

        const token = jwt.sign({_id: petugas[0].id }, process.env.TOKEN_SECRET);

        res.status(200).json({ 
            'message': 'login success',
            'token': token
        })
    } catch(err) {
        res.status(500).json({ error: err })
    }
}

exports.petugasFindAll = async (req, res) => {
    try {
        const petugas = await Petugas.all()
        res.status(200).json({
            petugas,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.petugasFindById = async (req, res) => {
    try {
        const id = req.params.id
        const petugas = await Petugas.one(id)
        res.status(200).json({
            petugas,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.petugasDelete = async (req, res) => {
    try {
        const id = req.params.id
        await Petugas.delete(id)
        res.status(200).json({
            message: 'delete success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.petugasUpdate = async (req, res) => {
    try {
        const id_petugas = req.params.id
        const body = req.body
        const encrypted_password = await bcrypt.hash(body.password, 10)
        const data = {
            nama_petugas: body.nama_petugas,
            petugasname: body.petugasname,
            password: encrypted_password
        }

        await Petugas.update(id_petugas, data)
        res.status(200).json({
            petugas: data,
            message: 'update success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.petugasCreate = async (req, res) => {
    try {
        const body = req.body
        const encrypted_password = await bcrypt.hash(body.password, 10)
        const data = {
            nama_petugas: body.nama_petugas,
            username: body.username,
            password: encrypted_password
        }

        await Petugas.create(data)
        res.status(200).json({
            message: 'addpetugas success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

// exports.petugasFindByRole = async (req, res) => {
//     try {
//         const id = req.params.id
//         const petugas = await Petugas.role(id)
//         res.status(200).json({
//             petugas,
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         })
//     }
// }

// exports.petugasFindByEmail = async (req, res) => {
//     try {
//         const id = req.params.id
//         const petugas = await Petugas.role(id)
//         res.status(200).json({
//             petugas,
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         })
//     }
// }

// exports.petugasCount = async (req, res) => {
//     try {
//         const id = req.params.id

//         const data = await Petugas.count(id)
//         res.status(200).json({
//             data
//         })
//     } catch (err) {
//         res.status(500).json({
//             error: err
//         })
//     }
// }