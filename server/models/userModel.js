const pool = require('./../db')

let user = {}

user.all = () => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

user.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user where id_petugas = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

user.email = (email, password) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user where email = ? && password = ?`, [email, password], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.role = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM user where role_id = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.delete = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM user WHERE id_petugas = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.update = (id_petugas, user) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE user set nama_petugas = ?, username = ?, password = ? WHERE id_petugas = 2`, [user.nama_petugas, user.username, user.password, id_petugas], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

user.create = (user) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO user (nama_petugas, username, password) values (?, ?, ?)`, [user.nama_petugas, user.username, user.password], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

user.count = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT COUNT(*) as count from user WHERE role_id = ? `, [id], (err, results) => {
            if (err) {
                return reject(err);
            }
            return resolve(results);
        })
    })

}

module.exports = user;