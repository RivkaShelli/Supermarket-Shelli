-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 23, 2022 at 11:46 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_4`
--

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `cart_id` int(255) NOT NULL,
  `user_id` int(255) NOT NULL,
  `create_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`cart_id`, `user_id`, `create_date`) VALUES
(1, 748823415, '2022-08-02 10:50:24'),
(2, 245565398, '2022-09-02 09:50:24'),
(3, 315185769, '2022-10-19 18:12:09'),
(4, 346788976, '2022-10-23 11:40:05'),
(5, 245565398, '2022-10-23 12:34:28'),
(6, 245565398, '2022-10-23 12:38:54');

-- --------------------------------------------------------

--
-- Table structure for table `cart_items`
--

CREATE TABLE `cart_items` (
  `item_id` int(255) NOT NULL,
  `product_id` int(255) NOT NULL,
  `amount` int(255) NOT NULL,
  `price` double NOT NULL,
  `cart_id` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `cart_items`
--

INSERT INTO `cart_items` (`item_id`, `product_id`, `amount`, `price`, `cart_id`) VALUES
(1, 4, 2, 50, 1),
(2, 26, 3, 36, 1),
(9, 4, 2, 24, 2),
(10, 7, 2, 11.8, 2),
(11, 3, 1, 21.9, 4),
(12, 4, 1, 12, 4),
(13, 24, 1, 25, 4),
(14, 4, 2, 24, 4),
(15, 8, 2, 15.8, 4),
(16, 8, 2, 15.8, 4),
(17, 1, 1, 6.9, 5),
(18, 3, 1, 21.9, 5),
(19, 8, 1, 7.9, 5),
(20, 4, 2, 24, 5);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `category_id` int(255) NOT NULL,
  `category_name` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`) VALUES
(1, 'All Products'),
(2, 'Vagetables&Fruits'),
(3, 'Meat&Fish'),
(4, 'Wine&Drinks'),
(5, 'Milk&Eggs');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `user_id` int(255) NOT NULL,
  `cart_id` int(255) NOT NULL,
  `total_price` double NOT NULL,
  `city` varchar(255) COLLATE utf8_bin NOT NULL,
  `street` varchar(255) COLLATE utf8_bin NOT NULL,
  `shipping_date` datetime DEFAULT NULL,
  `order_date` datetime NOT NULL,
  `4_digits` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`order_id`, `user_id`, `cart_id`, `total_price`, `city`, `street`, `shipping_date`, `order_date`, `4_digits`) VALUES
(1, 748823415, 1, 92.9, 'ashdod', 'devinchi', NULL, '2022-08-03 10:55:29', 6543),
(3, 245565398, 2, 35.8, 'Beer-Sheva', 'bergman', '2022-10-22 00:00:00', '2022-10-23 08:36:57', 6789),
(4, 346788976, 4, 114.5, 'Beit-Shemes', 'bergman', '2022-10-14 00:00:00', '2022-10-23 08:42:04', 5666),
(5, 245565398, 5, 60.699999999999996, 'Tel-Aviv', 'bamba', '2022-10-08 00:00:00', '2022-10-23 09:36:26', 6788);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(255) NOT NULL,
  `product_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `category_id` int(255) NOT NULL,
  `price` double NOT NULL,
  `image` varchar(255) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `product_name`, `category_id`, `price`, `image`) VALUES
(1, 'Milk', 5, 6.9, 'Milk.jpg'),
(2, 'White-cheese', 5, 5.9, 'White-cheese.jpg'),
(3, 'Yellow-cheese', 5, 21.9, 'Yellow-cheese.jpg'),
(4, 'Eggs', 5, 12, 'Eggs.jpg'),
(5, 'Cucumber', 2, 4.9, 'Cucumber.jpg'),
(6, 'Tomato', 2, 4.9, 'Tomato.jpg'),
(7, 'Carrot', 2, 5.9, 'Carrot.jpg'),
(8, 'Red-pepper', 2, 7.9, 'Red-pepper.jpg'),
(9, 'Yellow-pepper', 2, 7.9, 'Yellow-pepper.jpg'),
(10, 'Orange-pepper', 2, 8.9, 'Orange-pepper.jpg'),
(11, 'Potato', 2, 3.9, 'Potato.jpg'),
(12, 'Sweet-potato', 2, 5.9, 'Sweet-potato.jpg'),
(13, 'Squash', 2, 6.9, 'Squash.jpg'),
(14, 'Onion', 2, 2.9, 'Onion.jpg'),
(15, 'Garlic', 2, 10, 'Garlic.jpg'),
(16, 'Watermelon', 2, 5.9, 'Watermelon.jpg'),
(17, 'Melon', 2, 9.9, 'Melon.jpg'),
(18, 'Banana', 2, 11.9, 'Banana.jpg'),
(19, 'Green-apple', 2, 9.9, 'Green-apple.jpg'),
(20, 'Red-apple', 2, 9.9, 'Red-apple.jpg'),
(21, 'Peach', 2, 15.9, 'Peach.jpg'),
(22, 'Grapes', 2, 20.9, 'Grapes.jpg'),
(23, 'Chicken-Thighs', 3, 30, 'Chicken-Thighs.jpg'),
(24, 'Chicken-legs', 3, 25, 'Chicken-legs.jpg'),
(25, 'Chicken-Breast', 3, 40, 'Chicken-Breast.jpg'),
(26, 'Amnon-fish', 3, 12, 'Amnon-fish.jpg'),
(27, 'Salmon-fish', 3, 55, 'Salmon-fish.jpg'),
(28, 'Princess-fish', 3, 49, 'Princess-fish.jpg'),
(29, 'Water', 4, 12.9, 'Water.jpg'),
(30, 'Coca-Cola', 4, 9.9, 'Coca-Cola.jpg'),
(31, 'Coca-Cola-Zero', 4, 9.9, 'Coca-Cola-Zero.jpg'),
(32, 'Sprite', 4, 8.9, 'Sprite.jpg'),
(33, 'Sprite-Zero', 4, 8.9, 'Sprite-Zero.jpg'),
(34, 'Fuzetea', 4, 7.9, 'Fuzetea.jpg'),
(35, 'Strawberry-banana', 4, 8.9, 'Strawberry-banana.jpg'),
(36, 'Orange-Juice', 4, 8.9, 'Orange-Juice.jpg'),
(37, 'Red-wine', 4, 39.9, 'Red-wine.jpg'),
(38, 'White-wine', 4, 44.9, 'White-wine.jpg'),
(39, 'Tirosh', 4, 12.9, 'Tirosh.jpg'),
(40, 'Cottage', 1, 5.9, 'Cottage.jpg'),
(41, 'Butter', 1, 14, 'Butter.jpg'),
(42, 'Cream-cheese', 1, 15.9, 'Cream-cheese.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `first_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(255) COLLATE utf8_bin NOT NULL,
  `email` varchar(255) COLLATE utf8_bin NOT NULL,
  `user_id` int(9) NOT NULL,
  `password` varchar(255) COLLATE utf8_bin NOT NULL,
  `city` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `street` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `role` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`first_name`, `last_name`, `email`, `user_id`, `password`, `city`, `street`, `role`) VALUES
('David', 'Cohen', 'david@gmail.com', 245565398, 'asd345', 'jerusalem', 'bergman', 0),
('Shimon', 'Keler', 's78@gmail.com', 314165789, 'yui999', 'netivot', 'road', 0),
('Rivka', 'Shelli', 'rivka@gmail.com', 315185769, 'abc123', NULL, NULL, 1),
('tali', 'shalom', 'tali@gmail.com', 346788976, '890ta', 'telaviv', 'to', 0),
('Sara', 'Cohen', 'sara1@gmail.com', 453389702, '123se', 'Raanana', 'shlomoHamelech', 0),
('Ayala', 'Dahan', 'a123@gmail.com', 664356792, 'asd567', 'ashkelon', 'agamim', 0),
('Noa', 'Raz', 'noa@gmail.com', 748823415, 'rty789', 'ashdod', 'devinchi', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `from users to carts` (`user_id`);

--
-- Indexes for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`item_id`),
  ADD KEY `from carts to cart_items` (`cart_id`),
  ADD KEY `from products to cart_items` (`product_id`) USING BTREE;

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `from users to orders` (`user_id`),
  ADD KEY `from carts to orders` (`cart_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`),
  ADD KEY `from categories to products` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `email_2` (`email`),
  ADD UNIQUE KEY `email_3` (`email`),
  ADD UNIQUE KEY `email_4` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `cart_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `item_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `category_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `from users to carts` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `from carts to cart_items` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`),
  ADD CONSTRAINT `from products to cart_items` FOREIGN KEY (`product_id`) REFERENCES `products` (`product_id`);

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `from carts to orders` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`cart_id`),
  ADD CONSTRAINT `from users to orders` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `from categories to products` FOREIGN KEY (`category_id`) REFERENCES `categories` (`category_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
