-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- 主機: 127.0.0.1
-- 產生時間： 2019-04-14 18:05:59
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
  `Introduction` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 資料表的匯出資料 `achievement`
--

INSERT INTO `achievement` (`AchievementID`, `AchievementName`, `imgSrc`, `Introduction`) VALUES
(1, 'Game Start\r\n', '', 'Finish Level 1'),
(2, 'You know how to move now', '', 'Finish Level 2'),
(3, 'Junior treasure hunter', '', 'Kill 1 monster'),
(4, 'Wow, you learned how to save energy.', '', 'Use for block'),
(5, 'EZ :3', '', 'Full HP pass 3 level');

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
(1, 45, 1, '100.00');

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
(4, 'Andy2682', '268b7ce6f5dbf5499eddfeeb8d1617ba', 'a1019966254@gmail.com', 'f2b29184db4ec585f8e5d9e9ef7f6b99', 1, '2019-04-13 13:10:34'),
(45, 'A', '7fc56270e7a70fa81a5935b72eacbe29', 'A@gmail.com', 'A', 1, '2019-04-14 14:20:36');

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
(5, 1, 1, 3),
(6, 1, 2, 3),
(7, 1, 3, 3),
(8, 4, 1, 3),
(9, 4, 2, 3),
(10, 4, 3, 3),
(11, 4, 4, 3),
(12, 4, 5, 3),
(13, 4, 6, 3),
(14, 4, 7, 3),
(15, 45, 1, 3);

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
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用資料表 AUTO_INCREMENT `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- 使用資料表 AUTO_INCREMENT `user_star`
--
ALTER TABLE `user_star`
  MODIFY `ID` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
