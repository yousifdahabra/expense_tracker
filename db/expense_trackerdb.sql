-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:4308
-- Generation Time: Nov 09, 2024 at 02:47 AM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `expense_trackerdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `transactions_tbl`
--

CREATE TABLE `transactions_tbl` (
  `transaction_id` int(11) NOT NULL,
  `amount` decimal(10,0) NOT NULL,
  `date` date NOT NULL,
  `transaction_type` varchar(50) NOT NULL,
  `note` text NOT NULL,
  `user_login_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `transactions_tbl`
--

INSERT INTO `transactions_tbl` (`transaction_id`, `amount`, `date`, `transaction_type`, `note`, `user_login_id`) VALUES
(22, '125', '2024-11-13', 'expenses', 'note', 1),
(24, '1000', '2024-11-14', 'incomes', 'Note', 1),
(25, '1000', '2024-11-15', 'incomes', 'Note', 1),
(29, '1500', '2024-11-15', 'expenses', 'Note3', 12),
(30, '1200', '2024-11-15', 'incomes', '1000', 12),
(35, '222', '2024-11-20', 'incomes', 'Note', 15);

-- --------------------------------------------------------

--
-- Table structure for table `users_tbl`
--

CREATE TABLE `users_tbl` (
  `user_id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `craete_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users_tbl`
--

INSERT INTO `users_tbl` (`user_id`, `username`, `password`, `craete_date`) VALUES
(1, 'youisf', '$2y$10$b2D89DGgrvT1gFM6RocwN.Xk847.5MhDrK/6jv0wenNJ1jVw8zCNC', NULL),
(12, 'youisf2', '$2y$10$k67/xceHCaIjhxBG9vyE4.7MI1mVj.VHxAfNFuRL2krEoZWRRMY7.', NULL),
(15, 'youisf1', '$2y$10$QcDI4tp1GSmSA.YzZaMBde9gszEMOCfOnJcMp8bfKCdOkVnpjQcrm', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `transactions_tbl`
--
ALTER TABLE `transactions_tbl`
  ADD PRIMARY KEY (`transaction_id`);

--
-- Indexes for table `users_tbl`
--
ALTER TABLE `users_tbl`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `transactions_tbl`
--
ALTER TABLE `transactions_tbl`
  MODIFY `transaction_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `users_tbl`
--
ALTER TABLE `users_tbl`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
