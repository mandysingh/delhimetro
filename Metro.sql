-- MySQL dump 10.13  Distrib 5.5.54, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: nodeapp
-- ------------------------------------------------------
-- Server version	5.5.54-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `mid` int(11) NOT NULL AUTO_INCREMENT,
  `message` text,
  `uid_fk` int(11) DEFAULT NULL,
  `time` text,
  `status` enum('active','inactive') DEFAULT 'active',
  `parent_id` int(10) DEFAULT '0',
  `likes` int(10) DEFAULT '0',
  `favoriteflag` enum('0','1') DEFAULT '0',
  PRIMARY KEY (`mid`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'Make people fall in love with your ideas.',1,NULL,'active',0,0,'0'),(2,'The Social Network Script http://www.thewallscript.com.',1,NULL,'active',0,0,'0'),(3,'The Oauth Login http://www.oauthlogin.com',1,NULL,'active',0,0,'0'),(4,'Digital Marketing https://www.balloonnetworks.com/',2,NULL,'active',0,0,'0'),(5,'shc jkhvfdj hvhd vhd vhdvd',89,'Fri Jun 09 2017 15:09:46 GMT+0530 (IST)','active',0,0,'0');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'srinivas','$2a$10$yDPkHJJFORyk7I2OWHj6Seq5KFc7reyD7iygpvLnOBo0tQTslZcW.','srinivas@9lessons.info'),(2,'rajesh','$2a$10$20gRVeNMjsR935tT/TVe2.yAVQh5cLm17XEh7jZ50dQ9lK0nzkn/i','rajesh@balloonnetworks.com'),(3,'srivnivas','$2a$10$Afih0tGJzk.W/ifu5cT3xO8gPqHXcTrY5xwhzEkIr3OfVYeX2iBry','ldksj@ijfs.com'),(4,'dsjkbcs','$2a$10$6s.Nhe7mw0je9OpJrGiflO8GkzHgZZh1cLjqLy4JXjN/y.GFuDX2q','hdsbj@hbdjs.cjbs'),(5,'dsjkbcs','$2a$10$2xkm27xZqVLMeJSG8sgPrO/2YPtyY6BLzQnHjzy6ADWvsUFYnSSRS','hdsbj@hbdjs.cjbs'),(6,'dsjkbcs','$2a$10$fG0VwrFJ51otr.NauKjHq.Jm72W0OQzogAQMXXgIb.BgeFRUJlFVG','hdsbj@hbdjs.cjbs'),(7,'dsjkbcs','$2a$10$keJkLzU05qe6Vj/mLqRlW.Nw8y60LkOpGU5MilSX5NwDlJ4HIov4O','hdsbj@hbdjs.cjbs'),(8,'dsjkbcs','9lessions','hdsbj@hbdjs.cjbs');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-06-09 16:06:47
