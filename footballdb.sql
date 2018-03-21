CREATE DATABASE footballdb;
USE footballdb;

CREATE TABLE `clubs` (
  `name` varchar(20),
  `ground` varchar(20)
);
INSERT INTO `clubs` VALUES
('Arsenal', 'Emirates Stadium'),
('Chelsea', 'Stamford Bridge'),
('Liverpool', 'Anfield'),
('Man Utd', 'Old Trafford');