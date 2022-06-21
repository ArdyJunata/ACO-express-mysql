const pool = require('./../db')

let bukti = {}

bukti.all = () => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM bukti`, (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

bukti.create = (bukti) => {

    return new Promise((resolve, reject) => {
        pool.query(`INSERT INTO bukti (nama_petugas, foto_sekolah, jam_sampai, jam_selesai, foto_bukti, nama_guru, catatan, kontak_sekolah, deskripsi_kendala, foto_kendala) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                    [bukti.nama_petugas, bukti.foto_sekolah, bukti.jam_sampai, bukti.jam_selesai,bukti.foto_bukti, bukti.nama_guru, bukti.catatan, bukti.kontak_sekolah, bukti.deskripsi_kendala, bukti.foto_kendala],
        (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}


bukti.delete = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`DELETE FROM bukti WHERE id_bukti = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })

}

bukti.update = (id_bukti, bukti) => {
    return new Promise((resolve, reject) => {
        pool.query(`UPDATE bukti set nama_petugas = ?, foto_sekolah = ?, nama_sekolah = ?, jam_sampai = ?, jam_selesai = ?, foto_bukti = ?, nama_guru = ?, catatan = ?, kontak_sekolah = ?, deskripsi_kendala = ?, foto_kendala = ? WHERE id_bukti = ?`,
                    [bukti.nama_petugas, bukti.foto_sekolah, bukti.nama_sekolah, bukti.jam_sampai, bukti.jam_selesai,bukti.foto_bukti, bukti.nama_guru, bukti.catatan, bukti.kontak_sekolah, bukti.deskripsi_kendala, bukti.foto_kendala, id_bukti],
            (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

bukti.one = (id) => {

    return new Promise((resolve, reject) => {
        pool.query(`SELECT * FROM bukti where id_bukti = ?`, [id], (err, results) => {
            if (err) {
                return reject(err)
            }
            return resolve(results)
        })
    })
}

module.exports = bukti;