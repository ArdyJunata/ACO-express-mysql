const pool = require('./../db')

let sekolah = {}

sekolah.all = () => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM sekolah`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

sekolah.create = (sekolah) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO sekolah (nama_sekolah, foto_sekolah, latitude, longitude, kontak_sekolah, alumni_sekolah, alamat_lengkap, id_petugas) values (?, ?, ?, ?, ?, ?, ?, ?)`,
                    [sekolah.nama_sekolah, sekolah.foto_sekolah, sekolah.latitude, sekolah.longitude, sekolah.kontak_sekolah, sekolah.alumni_sekolah, sekolah.alamat_lengkap, sekolah.id_petugas],
        (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

// sekolah.lokasi = (latitude, longitude) => {

//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT * FROM sekolah where latitude = ? && longitude = ? &&`, [latitude, longitude], (err, results) => {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(results)
//         })
//     })

// }

sekolah.delete = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM sekolah WHERE id_sekolah = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

sekolah.update = (id_sekolah, sekolah) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE sekolah set nama_sekolah = ?, foto_sekolah =  ?, latitude = ?, longitude = ?, kontak_sekolah = ?, alumni_sekolah = ?, alamat_lengkap = ?, id_petugas = ? WHERE id_sekolah = ?`,
                    [sekolah.nama_sekolah, sekolah.foto_sekolah, sekolah.latitude, sekolah.longitude, sekolah.kontak_sekolah, sekolah.alumni_sekolah, sekolah.alamat_lengkap, sekolah.id_petugas, id_sekolah],
            (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

sekolah.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM sekolah where id_sekolah = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}


// sekolah.role = (id_sekolah) => {

//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT * FROM sekolah where id_sekolah = ?`, [id_sekolah], (err, results) => {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(results)
//         })
//     })

// }


// sekolah.count = (id) => {

//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT COUNT(*) as count FROM sekolah WHERE role_id = ? `, [id], (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         })
//     })

// }

// sekolah.one = (id) => {

//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT * FROM sekolah where id_sekolah = ?`, [id], (err, results) => {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(results)
//         })
//     })
// }

module.exports = sekolah;