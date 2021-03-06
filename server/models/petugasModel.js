const pool = require('../db')

let petugas = {}

petugas.all = () => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM petugas`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

petugas.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM petugas where id_petugas = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

// petugas.email = (email, password) => {

//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT * FROM petugas where email = ? && password = ?`, [email, password], (err, results) => {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(results)
//         })
//     })

// }

petugas.username = (username) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM petugas where username = ?`, [username], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

// petugas.role = (id) => {

//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT * FROM petugas where role_id = ?`, [id], (err, results) => {
//             if (err) {
//                 return reject(err)
//             }
//             return resolve(results)
//         })
//     })

// }

petugas.delete = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM petugas WHERE id_petugas = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

petugas.update = (id_petugas, petugas) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE petugas set nama_petugas = ?, username = ?, password = ? WHERE id_petugas = ?`, [petugas.nama_petugas, petugas.username, petugas.password, id_petugas], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

petugas.create = (petugas) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO petugas (nama_petugas, username, password) values (?, ?, ?)`, [petugas.nama_petugas, petugas.username, petugas.password], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

// petugas.count = (id) => {

//     return new Promise((resolve, reject) => {
//         pool.query(`SELECT COUNT(*) as count FROM petugas WHERE role_id = ? `, [id], (err, results) => {
//             if (err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         })
//     })

// }

module.exports = petugas;