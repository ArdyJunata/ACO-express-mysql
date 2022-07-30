const Sekolah = require('../models/sekolahModel'),
    bcrypt = require('bcryptjs'),
    util = require('util');

const {
    haversine
    } = require('../helper');

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
        const filename = req.file.filename
        const body = req.body
        const data = {
            nama_sekolah: body.nama_sekolah,
            foto_sekolah: filename,
            latitude: body.latitude,
            longitude: body.longitude,
            kontak_sekolah: body.kontak_sekolah,
            alumni_sekolah: body.alumni_sekolah,
            alamat_lengkap: body.alamat_lengkap,
            id_petugas: body.id_petugas
        }

        const sekolah = await Sekolah.create(data);
        res.status(200).json({
            message: 'add sekolah success',
            sekolah: data
        })
    } catch (err) {
        res.status(500).json({
            error: err
        })
    }
}

exports.acoSorting = async (req, res) => {
    try {
        // const jarak = haversine(0.4824689695779564, 101.4203418989024);
        // console.log(jarak);
        const body = req.body;
        var unsortedLocation = body.locations;
        var start = body.start_location;
        var end = body.end_location;

        unsortedLocation.unshift(start);

        const sorted = [];
        const pointed = [];

        unsortedLocation.forEach((value, index) => {
            const tempArray = unsortedLocation;
            if (index == 0) {
                sorted.push(value);
                pointed.push(index);
            } else {
                let min = 0;
                let nearest = null;
                let indexNearest = 0;

                tempArray.forEach((v, i) => {
                    var done = 0;
                    var index = 0;
                    pointed.forEach(pointValue => {
                        if (pointValue == i) {
                            done = 1;
                        }
                    });

                    if (done == 0) {
                        if (index == 0) {
                            nearest = v;
                            // console.log(v);
                            indexNearest = i;
                            min = haversine(sorted[sorted.length - 1], v)
                        } else {
                            const jarak = haversine(nearest, v)

                            if (jarak < min) {
                                nearest = v;
                                indexNearest = i;
                                min = jarak;
                            }
                        }
                    }
                });
                pointed.push(indexNearest);
                sorted.push(nearest);

            }
        });

        sorted.push(end);

        res.status(200).json({
            message: 'ACO Sorting',
            sorted: sorted
        });

    } catch (err) {
        res.status(500).json({
            eror: err
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
