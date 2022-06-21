-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jun 21, 2022 at 05:44 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `aco`
--

-- --------------------------------------------------------

--
-- Table structure for table `bukti`
--

CREATE TABLE `bukti` (
  `id_bukti` int(15) NOT NULL,
  `nama_petugas` varchar(25) NOT NULL,
  `foto_sekolah` varchar(15) NOT NULL,
  `jam_sampai` varchar(14) NOT NULL,
  `jam_selesai` varchar(14) NOT NULL,
  `foto_bukti` varchar(14) NOT NULL,
  `nama_guru` varchar(25) NOT NULL,
  `catatan` varchar(50) NOT NULL,
  `kontak_sekolah` varchar(14) NOT NULL,
  `deskripsi_kendala` varchar(50) NOT NULL,
  `foto_kendala` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bukti`
--

INSERT INTO `bukti` (`id_bukti`, `nama_petugas`, `foto_sekolah`, `jam_sampai`, `jam_selesai`, `foto_bukti`, `nama_guru`, `catatan`, `kontak_sekolah`, `deskripsi_kendala`, `foto_kendala`) VALUES
(2, 'tyo', '', '', '', '', 'tyo', 'lancar', '0832423423', 'jaringan sulit\n', ''),
(3, 'ardy', '', '', '', '', 'adi', 'lancar', '0832423423', 'jaringan sulit\n', ''),
(4, 'tyo', '', '', '', '', 'tyo', 'lancar', '0832423423', 'jaringan sulit\n', '');

-- --------------------------------------------------------

--
-- Table structure for table `petugas`
--

CREATE TABLE `petugas` (
  `id_petugas` int(15) NOT NULL,
  `nama_petugas` varchar(25) NOT NULL,
  `username` varchar(15) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `petugas`
--

INSERT INTO `petugas` (`id_petugas`, `nama_petugas`, `username`, `password`) VALUES
(4, 'ardy2', 'ardyjunata', '$2a$10$eI9pL168EFYHMyARO8T3hOGGdVL1HwEOAkWyuYHvDi84I7hr3ZC2a');

-- --------------------------------------------------------

--
-- Table structure for table `sekolah`
--

CREATE TABLE `sekolah` (
  `id_sekolah` int(15) NOT NULL,
  `foto_sekolah` varchar(25) NOT NULL,
  `nama_sekolah` varchar(30) NOT NULL,
  `latitude` varchar(20) NOT NULL,
  `longitude` varchar(20) NOT NULL,
  `kontak_sekolah` varchar(14) NOT NULL,
  `alumni_sekolah` varchar(25) NOT NULL,
  `alamat_lengkap` varchar(30) NOT NULL,
  `id_petugas` varchar(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sekolah`
--

INSERT INTO `sekolah` (`id_sekolah`, `foto_sekolah`, `nama_sekolah`, `latitude`, `longitude`, `kontak_sekolah`, `alumni_sekolah`, `alamat_lengkap`, `id_petugas`) VALUES
(4, '', 'sma 4', '123123', '3452342', '083242342', 'adi', 'jl.amin', '1'),
(5, '', 'sma 5', '123123', '3452342', '083242342', 'adi', 'jl.amin', '1');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bukti`
--
ALTER TABLE `bukti`
  ADD PRIMARY KEY (`id_bukti`);

--
-- Indexes for table `petugas`
--
ALTER TABLE `petugas`
  ADD PRIMARY KEY (`id_petugas`);

--
-- Indexes for table `sekolah`
--
ALTER TABLE `sekolah`
  ADD PRIMARY KEY (`id_sekolah`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bukti`
--
ALTER TABLE `bukti`
  MODIFY `id_bukti` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `petugas`
--
ALTER TABLE `petugas`
  MODIFY `id_petugas` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `sekolah`
--
ALTER TABLE `sekolah`
  MODIFY `id_sekolah` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
