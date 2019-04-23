-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2019-04-23 15:32:29
-- 伺服器版本: 10.1.35-MariaDB
-- PHP 版本： 7.2.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫： `fyp`
--

-- --------------------------------------------------------

--
-- 資料表結構 `achievement`
--

CREATE TABLE `achievement` (
  `AchievementID` int(11) NOT NULL,
  `AchievementName` text NOT NULL,
  `imgSrc` varchar(100) NOT NULL,
  `Description` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `achievement`
--

INSERT INTO `achievement` (`AchievementID`, `AchievementName`, `imgSrc`, `Description`) VALUES
(1, 'Game Start', 'start.jpg', 'Finish Level 1'),
(2, 'You know how to move now', 'move.png', 'Finish Level 2'),
(3, 'EZ :3', 'ez.jpg', 'Full HP pass 3 level'),
(4, 'Effective is good, Right?', 'saveTime.png', 'Use for loop block to open treasure chest'),
(5, 'Junior monster hunter', 'hunter.png', 'Kill 3 monster'),
(6, 'Intermediate treasure hunter', 'hunter2.png', 'Open 5 Treasure Chest'),
(7, 'Intermediate monster hunter', 'treasurehunter2.jpg', 'Kill 6 monster'),
(8, 'Junior treasure hunter', 'treasurehunter.jpg', 'Open 5 Treasure Chest');

-- --------------------------------------------------------

--
-- 資料表結構 `achievementdata`
--

CREATE TABLE `achievementdata` (
  `ID` int(11) NOT NULL,
  `UserID` int(11) NOT NULL,
  `AchievementID` int(11) NOT NULL,
  `PercentComplete` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `achievementdata`
--

INSERT INTO `achievementdata` (`ID`, `UserID`, `AchievementID`, `PercentComplete`) VALUES
(22, 45, 3, '100.00'),
(23, 45, 1, '100.00'),
(24, 45, 6, '50.00'),
(25, 45, 8, '100.00'),
(26, 45, 2, '100.00'),
(27, 45, 5, '33.33'),
(28, 45, 7, '100.00');

-- --------------------------------------------------------

--
-- 資料表結構 `userinfo`
--

CREATE TABLE `userinfo` (
  `UserID` int(11) NOT NULL,
  `userName` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `vkey` varchar(50) NOT NULL,
  `verified` tinyint(1) NOT NULL DEFAULT '0',
  `createdate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `userinfo`
--

INSERT INTO `userinfo` (`UserID`, `userName`, `password`, `email`, `vkey`, `verified`, `createdate`) VALUES
(4, 'Andy2682', '5583413443164b56500def9a533c7c70', 'a1019966254@gmail.com', '23a2340aad7b5a34896a604460c1988a', 1, '2019-04-13 13:10:34'),
(45, 'A', '3b98e2dffc6cb06a89dcb0d5c60a0206', 'A@gmail.com', 'A', 1, '2019-04-14 14:20:36');

-- --------------------------------------------------------

--
-- 資料表結構 `user_star`
--

CREATE TABLE `user_star` (
  `ID` int(100) NOT NULL,
  `UserID` int(11) NOT NULL,
  `LevelNum` int(5) NOT NULL,
  `Star` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `user_star`
--

INSERT INTO `user_star` (`ID`, `UserID`, `LevelNum`, `Star`) VALUES
(50, 45, 1, 3),
(51, 45, 2, 3),
(52, 45, 3, 3),
(53, 45, 4, 3),
(54, 45, 5, 3),
(55, 45, 6, 3),
(56, 45, 7, 3),
(57, 45, 8, 3),
(58, 45, 9, 3),
(59, 45, 10, 3),
(60, 45, 11, 3),
(61, 45, 12, 3),
(62, 45, 13, 3),
(63, 45, 14, 3),
(64, 45, 15, 3);

--
-- 已匯出資料表的索引
--

--
-- 資料表索引 `achievement`
--
ALTER TABLE `achievement`
  ADD PRIMARY KEY (`AchievementID`);

--
-- 資料表索引 `achievementdata`
--
ALTER TABLE `achievementdata`
  ADD PRIMARY KEY (`ID`);

--
-- 資料表索引 `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`UserID`);

--
-- 資料表索引 `user_star`
--
ALTER TABLE `user_star`
  ADD PRIMARY KEY (`ID`);

--
-- 在匯出的資料表使用 AUTO_INCREMENT
--

--
-- 使用資料表 AUTO_INCREMENT `achievementdata`
--
ALTER TABLE `achievementdata`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- 使用資料表 AUTO_INCREMENT `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- 使用資料表 AUTO_INCREMENT `user_star`
--
ALTER TABLE `user_star`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
