const User = require('../models/userModel'),
    bcrypt = require('bcryptjs'),
    jwt = require('jsonwebtoken');


exports.userLogin = async (req, res) => {
    try {
        const user = await User.username(req.body.username);
        if(!user) return res.status(404).send("Incorrect username");

        const validPassword = await bcrypt.compare(req.body.password, user[0].password);

        if(!validPassword) return res.status(400).send("Incorrect password");

        const token = jwt.sign({_id: user[0].id }, process.env.TOKEN_SECRET);

        res.status(200).json({ 
            'message': 'login success',
            'token': token
        })
    } catch(err) {
        res.status(500).json({ error: err })
    }
}

exports.userFindAll = async (req, res) => {
    try {
        const user = await User.all()
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userFindById = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.one(id)
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userFindByRole = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.role(id)
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userFindByEmail = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.role(id)
        res.status(200).json({
            user,
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userDelete = async (req, res) => {
    try {
        const id = req.params.id
        await User.delete(id)
        res.status(200).json({
            message: 'delete success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userUpdate = async (req, res) => {
    try {
        const id_petugas = req.params.id
        const body = req.body
        const encrypted_password = await bcrypt.hash(body.password, 10)
        const data = {
            nama_petugas: body.nama_petugas,
            username: body.username,
            password: encrypted_password
        }

        await User.update(id_petugas, data)
        res.status(200).json({
            user: data,
            message: 'update success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userCreate = async (req, res) => {
    try {
        const body = req.body
        const encrypted_password = await bcrypt.hash(body.password, 10)
        const data = {
            nama_petugas: body.nama_petugas,
            username: body.username,
            password: encrypted_password
        }

        await User.create(data)
        res.status(200).json({
            message: 'adduser success'
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.userCount = async (req, res) => {
    try {
        const id = req.params.id

        const data = await User.count(id)
        res.status(200).json({
            data
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}