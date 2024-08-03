-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: assetmanagementdb
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `asset`
--

DROP TABLE IF EXISTS `asset`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset` (
  `asset_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `manufacturing_date` date DEFAULT NULL,
  `expiry_date` date DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `asset_availability_status` enum('yes','no') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`asset_id`),
  UNIQUE KEY `asset_id` (`asset_id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset`
--

LOCK TABLES `asset` WRITE;
/*!40000 ALTER TABLE `asset` DISABLE KEYS */;
INSERT INTO `asset` VALUES (13,1,'Lenovo Laptop','ThinkPad X1 Carbon','2023-01-15','2027-01-15',100000.00,'https://tse2.mm.bing.net/th?id=OIP.qqZbNpO2cTNv0LhiIhTPVgHaHa&pid=Api&P=0&h=180','A high-performance laptop for professionals.',10,'yes','2024-05-17 08:01:34','2024-05-17 08:01:34'),(14,1,'asus Laptop','Tuf f15','2001-01-02','2030-03-03',120000.00,'https://tse4.mm.bing.net/th?id=OIP.UG540rv2EuNiGNtdpAMLDQHaE-&pid=Api&P=0&h=180','A high-performance laptop for gamers.',10,'yes','2024-05-17 14:37:05','2024-05-17 14:37:05'),(15,2,'Swift car','Suzuki ','2023-01-01','2024-01-01',2100000.00,'https://img.indianautosblog.com/2020/03/24/maruti-swift-front-three-quarters-left-side-4a8f.jpg','A high-performance family car with seating capacity of Four',10,'yes','2024-05-17 14:49:35','2024-05-17 14:49:35'),(16,4,'Developer Tools Guide','Book','2023-01-11','2024-01-23',210.00,'https://th.bing.com/th/id/OIP.-MAwic8jMnZU8Z-bDouNNQAAAA?rs=1&pid=ImgDetMain','A standard Developers guide book for web developers',10,'yes','2024-05-17 15:17:43','2024-05-17 15:17:43'),(17,5,'Bat','Reebok','2024-01-02','2024-03-03',4000.00,'https://tse2.mm.bing.net/th?id=OIP._OxYPST6jJAxDppYGm7sigHaHN&pid=Api&P=0&h=180','A high-performance kasmir willow bat for cricketers.',15,'yes','2024-05-17 16:25:47','2024-05-17 16:25:47'),(18,6,'Sofa','3 seater','2024-01-02','2024-03-03',40000.00,'https://tse2.mm.bing.net/th?id=OIP.pL4rx25VPVwJbV3KiBrgVwHaFK&pid=Api&P=0&h=180','  kashmir teakwood furniture set',3,'yes','2024-05-18 04:05:21','2024-05-18 04:05:21'),(24,3,'wifi router','jio','2023-01-01','2024-01-01',2000.00,'https://th.bing.com/th/id/OIP.MB0kqGXa9my6RXksw2T3hgAAAA?rs=1&pid=ImgDetMain','A high-performance router for strong network',20,'yes','2024-05-19 11:41:07','2024-05-19 11:41:07'),(29,1,'Wireless Printer','HP','2023-01-01','2024-01-23',3000.00,'https://th.bing.com/th/id/OIP._ouSwa8Qt_rizmAet1C1kQHaHa?rs=1&pid=ImgDetMain','A standard colour printer with all colours ',5,'yes','2024-05-25 05:12:38','2024-05-25 05:12:38'),(30,1,'microphone','boat','2023-01-01','2034-01-25',1000.00,'https://i5.walmartimages.com/asr/13336ad7-432c-4c14-b5e0-afff9edb9064.8c08b44d545749476752bcc7c1bcc837.jpeg','A standard microphone with good sound mic',30,'yes','2024-05-25 18:22:20','2024-05-25 18:22:20'),(31,3,'wifi LAN cabel','HP','2023-01-01','2035-01-25',200.00,'https://i.ebayimg.com/images/g/FoAAAOSw4DJYivLt/s-l1600.jpg','A good quality wifi fiber for wifi router',8,'yes','2024-05-26 04:28:33','2024-05-26 04:28:33'),(32,6,'Table','Teekwood','2023-01-01','2035-01-01',3000.00,'https://i5.walmartimages.com/asr/cff994f3-6241-42e4-b619-13d621328866.09d72383c3be8ffd13d95ac9a3cd874f.jpeg','A good quality Teekwood table for office and school works',40,'yes','2024-05-26 04:32:11','2024-05-26 04:32:11'),(33,2,'Hyundai car','i 20','2020-01-01','2035-01-01',100000.00,'https://www.bristolstreet.co.uk/new/vertu/car/hyundai/i20/Hyundai-i20-Premium-se-nav-5dr%5E1500x1000%5E.jpg','A Four Seater family Suv ',3,'yes','2024-05-26 05:16:54','2024-05-26 05:16:54'),(35,5,'Cork ball','leather ball','2020-01-01','2035-01-01',200.00,'https://media.newitts.com/cdn/images/products/new-design/800x800/it101264g.jpg','A Good quality Cork Ball ',10,'yes','2024-05-26 16:57:24','2024-05-26 16:57:24'),(37,4,'Java Book','Book','2020-01-01','2035-01-01',350.00,'https://www.informit.com/ShowCover.aspx?isbn=0133050564','complete java programming book for beginners',10,'yes','2024-05-26 17:02:29','2024-05-26 17:02:29'),(38,4,'Javascipt book','book','2023-01-11','2024-01-23',400.00,'https://wsvincent.com/assets/images/bestjavascriptbooks/js_for_impatient_programmers.jpg','A standard javascript book for beginners',30,'yes','2024-05-26 17:06:12','2024-05-26 17:06:12'),(39,4,'stumps','reebook','2020-01-01','2035-01-01',3000.00,'https://nwscdn.com/media/catalog/product/h/e/heavy_duty_flexi_cricket_stumps_for_use_with_all_types_of_cricket_ball_1.jpg','good quality stu,ps ',20,'yes','2024-05-27 10:54:44','2024-05-27 10:54:44');
/*!40000 ALTER TABLE `asset` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asset_request`
--

DROP TABLE IF EXISTS `asset_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset_request` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `asset_id` int DEFAULT NULL,
  `asset_description` varchar(255) DEFAULT NULL,
  `asset_request_type` enum('borrow','return') DEFAULT NULL,
  `asset_request_status` enum('Pending','Approved','Rejected') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `assetname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=84 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset_request`
--

LOCK TABLES `asset_request` WRITE;
/*!40000 ALTER TABLE `asset_request` DISABLE KEYS */;
INSERT INTO `asset_request` VALUES (57,78,15,'A high-performance laptop for gamers.','borrow','Pending','2024-05-22 09:33:18','2024-05-22 09:33:18',NULL,'raghu torvi'),(58,78,17,'A high-performance kasmir willow bat for cricketers.','borrow','Pending','2024-05-22 09:33:24','2024-05-22 09:33:24',NULL,'raghu torvi'),(59,78,24,'A high-performance router for gamers.','borrow','Pending','2024-05-22 09:33:29','2024-05-22 09:33:29',NULL,'raghu torvi'),(60,78,13,'A high-performance laptop for professionals.','borrow','Pending','2024-05-22 09:40:29','2024-05-22 09:40:29',NULL,'raghu torvi'),(61,78,14,'A high-performance laptop for gamers.','borrow','Pending','2024-05-22 09:40:34','2024-05-22 09:40:34',NULL,'raghu torvi'),(62,78,15,'A high-performance laptop for gamers.','borrow','Pending','2024-05-22 09:40:39','2024-05-22 09:40:39',NULL,'raghu torvi'),(63,78,16,'A high-performance router for gamers.','borrow','Pending','2024-05-22 09:40:43','2024-05-22 09:40:43',NULL,'raghu torvi'),(64,78,17,'A high-performance kasmir willow bat for cricketers.','borrow','Pending','2024-05-22 09:40:47','2024-05-22 09:40:47',NULL,'raghu torvi'),(65,78,18,'  kashmir teakwood furniture set','borrow','Pending','2024-05-22 09:40:52','2024-05-22 09:40:52',NULL,'raghu torvi'),(66,78,24,'A high-performance router for gamers.','borrow','Pending','2024-05-22 09:40:58','2024-05-22 09:40:58',NULL,'raghu torvi'),(67,79,13,'A high-performance laptop for professionals.','borrow','Pending','2024-05-22 09:45:57','2024-05-22 09:45:57',NULL,'vishu '),(68,79,14,'A high-performance laptop for gamers.','borrow','Pending','2024-05-22 09:46:02','2024-05-22 09:46:02',NULL,'vishu '),(69,79,15,'A high-performance laptop for gamers.','borrow','Pending','2024-05-22 09:46:08','2024-05-22 09:46:08',NULL,'vishu '),(70,79,16,'A high-performance router for gamers.','borrow','Pending','2024-05-22 09:46:13','2024-05-22 09:46:13',NULL,'vishu '),(71,79,18,'  kashmir teakwood furniture set','borrow','Pending','2024-05-22 09:46:18','2024-05-22 09:46:18',NULL,'vishu '),(72,79,17,'A high-performance kasmir willow bat for cricketers.','borrow','Pending','2024-05-22 09:46:21','2024-05-22 09:46:21',NULL,'vishu '),(73,78,13,'A high-performance laptop for professionals.','borrow','Pending','2024-05-22 11:50:17','2024-05-22 11:50:17',NULL,'raghu torvi'),(74,78,15,'A high-performance laptop for gamers.','borrow','Pending','2024-05-22 11:50:32','2024-05-22 11:50:32',NULL,'raghu torvi'),(75,80,13,'A high-performance laptop for professionals.','borrow','Approved','2024-05-22 12:08:01','2024-05-22 12:08:01',NULL,'santosh k'),(76,78,30,'A standard microphone with good sound mic','borrow','Rejected','2024-05-25 18:23:21','2024-05-25 18:23:21',NULL,'raghu torvi'),(78,95,13,'A high-performance laptop for professionals.','borrow','Pending','2024-05-27 06:32:18','2024-05-27 06:32:18',NULL,'shreyas navalghi'),(80,97,13,'A high-performance laptop for professionals.','borrow','Pending','2024-07-16 14:49:01','2024-07-16 14:49:01',NULL,'Nitishhh'),(81,78,13,'A high-performance laptop for professionals.','borrow','Approved','2024-08-02 17:39:51','2024-08-02 17:39:51',NULL,'raghu torvi'),(82,78,13,'A high-performance laptop for professionals.','borrow','Pending','2024-08-02 17:46:12','2024-08-02 17:46:12',NULL,'raghu torvi');
/*!40000 ALTER TABLE `asset_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asset_service_request`
--

DROP TABLE IF EXISTS `asset_service_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `asset_service_request` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `asset_id` int DEFAULT NULL,
  `issue_type` enum('malfunction','repair') DEFAULT NULL,
  `issue_resolve_status` enum('solved','unsolved','rejected') DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=141 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asset_service_request`
--

LOCK TABLES `asset_service_request` WRITE;
/*!40000 ALTER TABLE `asset_service_request` DISABLE KEYS */;
INSERT INTO `asset_service_request` VALUES (3,3,3,'malfunction','unsolved','Saree color bleeding issue','2024-04-23 10:07:07','2024-04-23 10:07:07'),(4,4,4,'repair','unsolved','Kurta stitching problem','2024-04-23 10:07:07','2024-04-23 10:07:07'),(5,1,5,'malfunction','unsolved','Refrigerator not cooling properly','2024-04-23 10:07:07','2024-04-23 10:07:07'),(6,2,6,'repair','solved','Washing machine door lock issue','2024-04-23 10:07:07','2024-04-23 10:07:07'),(7,3,7,'malfunction','solved','Physics book pages torn','2024-04-23 10:07:07','2024-04-23 10:07:07'),(8,4,8,'repair','solved','Cookbook binding broken','2024-04-23 10:07:07','2024-04-23 10:07:07'),(9,1,9,'malfunction','unsolved','Rice container lid broken','2024-04-23 10:07:07','2024-04-23 10:07:07'),(10,2,10,'repair','unsolved','Dal packet seal broken','2024-04-23 10:07:07','2024-04-23 10:07:07'),(12,456,789,'malfunction','unsolved','Description of the issue','2024-05-01 12:00:00','2024-05-01 12:00:00'),(123,456,789,'malfunction','unsolved','Description of the issue','2024-05-01 12:00:00','2024-05-01 12:00:00'),(124,55,55,'repair','solved','Laptop battery replacement needed','2024-04-23 10:07:07','2024-04-23 10:07:07'),(126,14,24,'repair','unsolved','Asset requires maintenance due to wear and tear.','2024-05-26 10:00:00','2024-05-26 10:00:00'),(127,14,24,'repair','unsolved','Asset  maintenance due to wear and tear.','2024-05-26 10:00:00','2024-05-26 10:00:00'),(135,13,13,'repair','solved','asset is not working properly','2024-05-25 18:25:02','2024-05-25 18:25:02'),(136,13,13,'repair','solved','i want to get it repaired urgently','2024-05-25 18:42:31','2024-05-25 18:42:31'),(137,13,38,'repair','solved','car needs to serviced','2024-05-26 17:10:46','2024-05-26 17:10:46'),(138,13,14,'repair','unsolved','i nedd a service','2024-05-27 06:33:14','2024-05-27 06:33:14'),(139,13,38,'repair','unsolved','i have to repair the asset','2024-05-27 10:57:42','2024-05-27 10:57:42'),(140,1,1,'repair','unsolved','i need it urgemt','2024-08-02 17:46:40','2024-08-02 17:46:40');
/*!40000 ALTER TABLE `asset_service_request` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `slug` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`category_id`),
  UNIQUE KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'electronics','Electronics','2024-04-23 10:01:54','2024-04-23 10:01:54'),(2,'cars','cars','2024-04-23 10:01:54','2024-04-23 10:01:54'),(3,'netwotkAsset','networkAsset ','2024-04-23 10:01:54','2024-04-23 10:01:54'),(4,'books','Books','2024-04-23 10:01:54','2024-04-23 10:01:54'),(5,'sportUtility','sports materials','2024-04-23 10:01:54','2024-04-23 10:01:54'),(6,'furniture','Furniture','2024-04-23 10:01:54','2024-04-23 10:01:54');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(1000) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `gender` enum('male','female','other') DEFAULT NULL,
  `phone_number` varchar(50) DEFAULT NULL,
  `address` varchar(50) DEFAULT NULL,
  `role` enum('user','admin') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=100 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (16,'aman','aman@gmail.com','passwrssd23','Ait Kussmar','male','78961230','456 Prk St, Kolkata','user','2024-05-01 10:22:52','2024-05-01 10:22:52'),(17,'niti','niti@example.com','$2b$10$//KNIbuiz1BPgL5cJ7ng1OwiAmEwx2LY3z3EN3si2uCX9v7J3Ad8a','nitish','male','1234567890','123 Main St, City, Country','admin','2024-05-03 08:05:49','2024-05-03 08:05:49'),(18,'john_doe','johndoe@example.com','P@ssw0rd','John Doe','male','1234567890','123 Main St, City, Country','user','2024-05-03 11:45:41','2024-05-03 11:45:41'),(22,'aman','aman@gmail.com','$2b$10$LM4CV2ZmGY16qXnnohSiMOS9CE1lpawEuqBw4WWuvKoo0AePn1bXy','Raj Patel','male','+91','123, Street Name, City, State, India','user','2024-05-03 17:02:28','2024-05-03 17:02:28'),(23,'aman','aman@gmail.com','$2b$10$p7IJ0F7Kg1RRV9vpEg52l.l9D.YDAVAvPSh2143idpguoZcHrC0qK','Raj Patel','male','+91','123, Street Name, City, State, India','user','2024-05-03 17:03:57','2024-05-03 17:03:57'),(24,'aman','aman@gmail.com','$2b$10$V.398ANu24i2uhwBvNNR1.Cnr7j2JvpXpyp78AA0kiZrXbCMp6v4y','Raj Patel','male','+91','123, Street Name, City, State, India','user','2024-05-03 17:05:29','2024-05-03 17:05:29'),(25,'amith','aman@gmail.com','$2b$10$khQu/aRjnJ3HiaL8BjEWsewEGrwil3xMpQKjr0qVSqdnImPzWq.oG','Raj Patel','male','+91','123, Street Name, City, State, India','user','2024-05-03 17:06:37','2024-05-03 17:06:37'),(26,'raju','raju@gmail.com','$2b$10$X.yE09qfi4UbwNh.N0DSC.3YHw87oGnFiC2CG9KsLPQUCc/uOlz0y','Raj Patel','male','+91','123, Street Name, City, State, India','user','2024-05-03 17:41:38','2024-05-03 17:41:38'),(27,'raju','raju@gmail.com','$2b$10$SzITtwQ8f.E1DHzGOv6eyuol4JpsAuRfDNOjLQZNBd81fyyQ3OW6C','Raj Patel','male','+91','123, Street Name, City, State, India','user','2024-05-03 18:11:17','2024-05-03 18:11:17'),(28,'vishu','vishu@gmail.com','$2b$10$xRyObExBPV0xXi8E6sDEeeYQxcYOo3LSKISwv3im8TJ46yH5coWdy','vishalaxi','male','+91','123, Street Name, City, State, India','user','2024-05-04 03:48:59','2024-05-04 03:48:59'),(29,'hanmu','hanmu@gmail.com','$2b$10$a.3eXxDjXXuIF5mJCqHIUuOHFyrNcCVKlIxY7FXqGmMbvTlcEuJNG','Jane Smith','female','9876543210','456 Elm St, Mumbai','user','2024-05-04 09:38:40','2024-05-04 09:38:40'),(30,'hanmant','hanmu@gmail.com','$2b$10$IRYeJ5PbODz0Og/gTFbSKejtaOxfVbdoC4omDLvjQ8ZPlm42W3COW','Jane Smith','female','9876543210','456 Elm St, Mumbai','user','2024-05-04 09:49:15','2024-05-04 09:49:15'),(31,'hrutik','hrutik@gmail.com','$2b$10$rOFP4wMMin0pMryhvNkNt.ek6TYUHmpk8wRPUtI6y7ggGdZQ6rBme','Jane Smith','female','9876543210','456 Elm St, Mumbai','user','2024-05-04 10:03:39','2024-05-04 10:03:39'),(32,'naveen','h@gmail.com','$2b$10$oDKqiuqluXuONVS04WebneklOxUmwPrMsuqi66gQRUUtLPVCbzczK','Jane Smith','female','9876543210','456 Elm St, Mumbai','user','2024-05-04 11:03:01','2024-05-04 11:03:01'),(33,'navven','h@gmail.com','$2b$10$gJio3csL8nuH89MgsA7ydumblHVDQi0YTk.caFVyKoA2k9BLZY3qe','Jane Smith','female','9876543210','456 Elm St, Mumbai','user','2024-05-04 11:05:07','2024-05-04 11:05:07'),(34,'preem','h@gmail.com','$2b$10$ln2Pov1GU8P4cPXC77WHJOj0GSmFsA0SFqMxb5klm8FA/Sc4uVe5C','Jane Smith','female','9876543210','456 Elm St, Mumbai','user','2024-05-04 11:36:25','2024-05-04 11:36:25'),(35,'ameer','ameer@gmail.com','$2b$10$MXUs.y7vv9G8pWI7mDG2FOPQH7XQ8icY1erbNYL5JGaccG9.Slajm','ammer','male','9876543210',' Mumbai','user','2024-05-05 02:31:40','2024-05-05 02:31:40'),(36,'shinu','shinu@example.com','$2b$10$G4nUh1JMXvToHeWU3nIlieN6q1MvFcIvc6oZFuqGh7qRAzEWeU3SS','Jane Smith','female','9876543210','456 Elm St, Mumbai','user','2024-05-05 12:23:06','2024-05-05 12:23:06'),(37,'nitish','nitish@gmail.com','$2b$10$5MmDm79fpRQgKIK/zPIhTuwLg6JhAwSVr9btQi2HGgw5MWwAn.Y0K','niti','male','900893263','mudhol','user','2024-05-05 12:50:17','2024-05-05 12:50:17'),(38,'nitish','nitish@gmail.com','$2b$10$5TfPwetKSMcm07iHpKOLV.M4sYoKH/0fHtTTqZ9AZMZqaqTBV..Wq','niti','male','900893263','mudhol','user','2024-05-05 16:42:32','2024-05-05 16:42:32'),(39,'santosh','nitish@gmail.com','$2b$10$kOIxR23CBdPYGWfG46EYeuy7p0.mDgc/lCMKcJtkkxWd21CfKkuAS','niti','male','900893263','mudhol','user','2024-05-05 16:45:47','2024-05-05 16:45:47'),(40,'chapyaa','chapyaa@gmail.com','$2b$10$1r2gdKqadZ34P0V7R5vHjeIIVy10rbJfRdnlGrlrfiJmNEW.sbZWK','niti','male','900893263','mudhol','user','2024-05-05 17:43:31','2024-05-05 17:43:31'),(41,'vishnu','vishnu@gmail.com','$2b$10$6.7s8tYiztdOJgxN5K.3jOxklcKtFWyhoTmqtHZcedQKStYzm8XI.','vishalaxi','male','900893263','mudhol','user','2024-05-06 03:29:15','2024-05-06 03:29:15'),(42,'amogh','amogh@gmail.com','$2b$10$BGGgThQtZL7rXIRzIX4Ohu.paM2E0mlXxCrl9iRBAUk2iGNYZFotG','amogh','male','900893263','mudhol','user','2024-05-06 11:04:30','2024-05-06 11:04:30'),(43,'praveen','praveen@gmail.com','$2b$10$Jj/pB0aVsO3X5RWLhWEv/.dAzMTJA3nTKyKmBeB2qu53OV2BtzJK2','praveen','male','900893263','mudhol','user','2024-05-06 12:08:50','2024-05-06 12:08:50'),(44,'prajwal','prajwal@gmail.com','$2b$10$F2kXV98knBGZPYaZx7RAB.XoIWD3ttEvb462Y4BWjA.L3tBLbC3ce','prajwal','male','900893263','mudhol','user','2024-05-06 18:04:18','2024-05-06 18:04:18'),(45,'prabhu','vishu1@gmail.com','$2b$10$U3jeabAsfEjsuBiRVu6DsuCSVslR1Y4AQOOZFqwBMlYfSrZF0Bp4i','vishalaxi','female','123-456-7890','123 Main St, City, State, ZIP','user','2024-05-16 06:34:49','2024-05-16 06:34:49'),(46,'nitishnalatawad','nitiya@example.com','$2b$10$9vS.bMYWx7VQxsalifhKnuMHL14De5VLJgOAWrJzcSE6gTxILe1x2','Nitish Nalatawad','male','1234567890','123, Example Street, Bangalore','user','2024-05-16 18:26:13','2024-05-16 18:26:13'),(48,'parsuhegde','nitishnalatawad11@gmail.com','$2b$10$QZ7ED0XbXaWKtZNhb3PM.ubxCge9wl9d3W7P2JpvlFR.M44HKF5Q2','Nitish Nalatawad','male','08197903932','HOUSE NO 209 VIDYAGIRI NAGAR KATTI PLOT','user','2024-05-16 18:45:29','2024-05-16 18:45:29'),(49,'parsu','nitishnalatawad1@gmail.com','$2b$10$LrHaAi894bwvoqMSUAFzau9Jhj8pV.OeucH.QE0ei9jweEi9HXF6a','Nitish Nalatawad','male','08197903932','HOUSE NO 209 VIDYAGIRI NAGAR KATTI PLOT','user','2024-05-16 18:45:48','2024-05-16 18:45:48'),(51,'hanamant nalatawad','prema123@gmail.com','$2b$10$3jBuIv/TOrooQKYFTzAAU.oInPIFH7YXLrDdz69NhugjdFHrpr9fm','prema Nalatawad','male','8197903932','HOUSE NO 209 VIDYAGIRI NAGAR KATTI PLOT','user','2024-05-16 19:04:44','2024-05-16 19:04:44'),(52,'jayya nadagoud','jayanadagaoud123@gmail.com','$2b$10$r8hXXQOcUYj8AiUFlMtfzO44EVYiTxEYT7G2n/buO5kZdSUZ8hrFG','jaya nadagoudar','male','9880625286','mudhol','user','2024-05-17 04:32:36','2024-05-17 04:32:36'),(53,'kashibai nalatawad','kashibai111@gmail.com','$2b$10$Ychawu4r4TL2AbdBiAEhUeFfIV/X2Niki6tU4FMo2F4gQEoypuRpG','kashibai ','male','9008932632','mudhol','user','2024-05-17 04:47:15','2024-05-17 04:47:15'),(57,'amith a j','amithaj0008@gmail.com','$2b$10$GzkoFvDvs1CFlXi01pe7WubDhCO3TScmiR4.tPSmPCjo7HLYmuxIy','Nitish Hanamant Nalatawad','male','08197903932','C/O H B Nalatawad  house no 210','admin','2024-05-17 05:12:55','2024-05-17 05:12:55'),(58,'prajwal ','prajwal111@gmail.com','$2b$10$ORqPblGKdDU6K8FKgy87SuUEhlRSnUfCklMIyji9E0nixWcqG1LqC','pajju','male','6486246842','chichkandi','admin','2024-05-17 05:14:33','2024-05-17 05:14:33'),(59,'girish','girish23@gmail.com','$2b$10$GyarO9gpKbNvZqoJfbFQou38lm1jcyHcyuPtnNZbULnhDDPH/Xnne','santu','male','8383839393','hyderabad','user','2024-05-17 05:19:38','2024-05-17 05:19:38'),(60,'shridevi navalaghi','shri111@gmail.com','$2b$10$PqQCpOPD7x5YSkorOQFefuvKuVIQrlJXXZIVB3ErIPnSvVT67CSSW','shridevi','male','9880635286','bagalkot','user','2024-05-17 06:39:50','2024-05-17 06:39:50'),(61,'basu mantoor','shriya111@gmail.com','$2b$10$obYlEUv4z.o2.KIaO706.uS4SJBA4i3bkrLEBLinbIk6orj9KH28C','basuva','male','648428624','mudhol','user','2024-05-17 08:15:46','2024-05-17 08:15:46'),(62,'prajwal patil','paju111@gmail.com','$2b$10$4jFTJPoDZ8ED3/A4/YDiCOWyb8zWZ4aebbfqnwBgMM7ZEm9AMTIe2','pajju','male','898383903','banglore','admin','2024-05-17 17:11:38','2024-05-17 17:11:38'),(63,'rahul jain','rahul111@gmail.com','$2b$10$suxkRPF4PJcaGslyIbvnT.ETcqlnht4bdvsJhDuc.KjFoHc31poaC','rahul','male','83949749','belgav','admin','2024-05-17 17:32:09','2024-05-17 17:32:09'),(64,'john','john@example.com','$2b$10$09UdeEmGIxp1KRkZrOpjAeu.8t9JgJZOXz3bnKlP1nACOsl5JZXq6','John Doe','male','+91 9876543210','123, ABC Street, XYZ City, India','admin','2024-05-17 17:36:32','2024-05-17 17:36:32'),(65,'younus','niti@gamil.com','$2b$10$0IsOKNjX1VCfsEXHoWGV1Okt0majRuiAtuGAhxAfz6DCeaSywgGgW','nitish','male','4727246742','nfiudufud','admin','2024-05-17 17:49:48','2024-05-17 17:49:48'),(66,'pushpa','push111@gmail.com','$2b$10$KSkQeQDvs6TIykqS6N9Nk.duSlMLZ6UlCdGFbOk3H9Qq6EFbmqiGq','pushpa','male','988078338','mudhol','admin','2024-05-17 17:53:40','2024-05-17 17:53:40'),(67,'parsuuu','parn@example.com','$2b$10$gaQZJVTNS7XSGutCBLn00e/6plgF1bfIXUS3UX6RRra.IinTE5vly','John Doe','male','+91 9876543210','123, ABC Street, XYZ City, India','admin','2024-05-17 18:17:47','2024-05-17 18:17:47'),(71,'bhavana','netra@gmail.com','$2b$10$JQj79cgcJjYPahU6MChrtOIGjWyFzSbfqSAXygJ9xYxfw1FbtjS4a','netra','male','9880768678','mudhol','admin','2024-05-17 18:44:26','2024-05-17 18:44:26'),(73,'parsanna','nishy@example.com','$2b$10$k1OGbw9/r4tuzCV8TCbDC.zpPhzo4wPdo6rTz3puhBz5TRcmV.zMa','John Doe','male','+91 9876543210','123, ABC Street, XYZ City, India','admin','2024-05-18 13:09:04','2024-05-18 13:09:04'),(74,'santu','santu@example.com','$2b$10$0pR7jzEXqTZcsdFV4B7vb.1RCb26xekRjr/fdGXpysCzsrmndFGWe','John Doe','male','+1234567890','123 Main St, Anytown, USA','user','2024-05-18 17:20:21','2024-05-18 17:20:21'),(75,'santuu','santuu@example.com','$2b$10$eC8f/w1NmWXFPOpLPUR8..5oOp7eKdvnt6GpXAP/vtGDUvQiEa2ju','John Doe','male','+1234567890','123 Main St, Anytown, USA','admin','2024-05-18 17:24:11','2024-05-18 17:24:11'),(76,'ramu torvi','ramu111@gmail.com','$2b$10$qN6ICNF5ZOMZLxR1HbNdr.rT5/6/szx.micFkUUVuRtCuaYrICqUC','ramu','male','743973949','mudhol','admin','2024-05-19 03:20:51','2024-05-19 03:20:51'),(77,'manoj','manu@example.com','$2b$10$bUZmG1qTrbuO.7.X6cFg9OE3MZJ5ENoKmZsObwEPCQR/WHef7pl1G','John Doe','male','+1234567890','123 Example St, City, Country','admin','2024-05-19 03:39:46','2024-05-19 03:39:46'),(78,'raghu torvi','raghu111@gmail.com','$2b$10$EgRN9ta8np.Qw42Hox9.wePjCYD.hFWyZm2PWAo60PV/bXWwEJP8m','raghu','male','986478494','mudhol','user','2024-05-19 03:48:19','2024-05-19 03:48:19'),(79,'vishu ','vishakkaa@gmail.com','$2b$10$9k2ebNViNME.FjT6m62BpuC.gzikWBTAksAcPK0SbgF.Y8Pi.vwJ2','vishalaxi','female','09008932632','mudhol','user','2024-05-22 09:45:43','2024-05-22 09:45:43'),(80,'santosh k','santu111@gmail.com','$2b$10$Os.iXBh2CReD1ScEet9Rje6OoLa2XgZX4prBYDNpHZt8/hEcGoEgu','santosh','male','3869826802460824608246','mudhol','user','2024-05-22 12:05:51','2024-05-22 12:05:51'),(82,'venkappa ','venkya@gmail.com','$2b$10$XgoIEL8jLk45eI7/DHNKAeOLTCdDQCkskAbGnEvRcsq7CGcKBYQBy','venkyy','male','9880947483','rooghi','user','2024-05-25 18:08:58','2024-05-25 18:08:58'),(83,'ramesh galagali','ramyaaaa111@gmail.com','$2b$10$oCVq.4QmzE9lVSa.U5fWAescDXNe5bIQfiM79UgSz2AdDKPDtzIpy','ramu','male','734807380','jamkandi','user','2024-05-25 18:12:26','2024-05-25 18:12:26'),(84,'ishwar hadapad','ishuu111@gmail.com','$2b$10$DsFKYv6LkmQSbIOPeYAYvOiA5Ps9mO4Ow2MbYyfrpkFJIQQuJV1wS','ishwar','male','8943893934','galagali','user','2024-05-25 18:17:29','2024-05-25 18:17:29'),(85,'raju narasapnavar','raja111@gmail.com','$2b$10$7jMN8XiEZjcU.LW6CJ8T8Os1leXGTyS588T0RNRYpAKUAYsQvggvm','raju','male','9008932632','mudhol','user','2024-05-25 19:24:02','2024-05-25 19:24:02'),(86,'ramapa udapudi','ramapa111@gmail.com','$2b$10$ig2FUPpgnIU4.fYgW3R4IuOXRujXJc4LBYEx3JosyxZL9LDn9DpBi','ramu ','male','9284098490','mudhol','admin','2024-05-26 04:24:08','2024-05-26 04:24:08'),(87,'shridevi navalghi','shridevi111@gmail.com','$2b$10$F6NpMZkxwbDZY1X72UJ3OOQmmVr8XZfEiLF7v6iVPPDulgvlUNGwq','shridevi','female','9878789687','mudhol','admin','2024-05-26 04:46:30','2024-05-26 04:46:30'),(88,'ananaya navalghi','anu111@gmail.com','$2b$10$.eFwpUwF7o4zIMeaAA4BounyhpNDTAQIi6rCbnRfOCwZ3pWRYR9G6','ananaya','female','7284724872','bagalkot','user','2024-05-26 05:09:59','2024-05-26 05:09:59'),(89,'putaa anthony','putta111@gmail.com','$2b$10$KhbCvMW9FZg7U6Zkw98W4Ooqdr4TSoVM9N/mZE7ePkfXUANujTJpu','puttta','male','9840830489','belgav','user','2024-05-26 10:46:22','2024-05-26 10:46:22'),(90,'putii anthony','putti111@gmail.com','$2b$10$3KXn5FxifnXV/RGaBbaJP.PMqhQ2fszVXMSSOZfgkEInJuR/v0hLW','putti','female','9836739333','belgav','user','2024-05-26 10:48:03','2024-05-26 10:48:03'),(91,'anthony jagali','anthony111@gmail.com','$2b$10$Y5bs2xA0O6usVMaVHJCDmOtAyULNaasBjt7YMyaBiOBcr7KzPJ5.e','anthony','male','9880735267','chennai','admin','2024-05-26 10:53:52','2024-05-26 10:53:52'),(92,'ragavendra toevi','suku111@gmail.com','$2b$10$Uu0kEMPO09zMc0tIm..eWen4GUH/vMUJJE4BKkz9BUSglNlxj8zpi','sukanya','female','9884647383','mudhol','admin','2024-05-26 11:43:51','2024-05-26 11:43:51'),(93,'sukanya torvi','sukuu123@gmail.com','$2b$10$I5n6PcByIHEZtL.KHDzfrOOVVymqKo0wayXtXZUPZSNTPE4mCYFsy','suku','female','9883647484','bagalkot','admin','2024-05-26 19:24:19','2024-05-26 19:24:19'),(94,'venkanna nadagaouda','venku111@gmail.com','$2b$10$VczE8n.sewiEAfXDezNqnegKSdAOjsQ8HEyIqSFbl5.nsfKLBxbOW','venkya','male','8684658638','mudhol','user','2024-05-27 03:00:44','2024-05-27 03:00:44'),(95,'shreyas navalghi','shreyas11@gmail.com','$2b$10$cICuf5l/N1WqoT5irHTWseaWyNnXIPgZHPe5XUGbRIkn8kRZz0YFy','chinuu','male','8359385988','mudhol','user','2024-05-27 06:30:33','2024-05-27 06:30:33'),(96,'shivaji raje','shivaji11@gmail.com','$2b$10$P8c99aCsVkAoibiRnXpwmee7jHYhbQriKW.znFB6WZKCJ2J7hRX0a','shivaji ','male','9383988484','belgav','admin','2024-05-27 10:50:17','2024-05-27 10:50:17'),(97,'Nitishhh','nitishnalatawad111@gmail.com','$2b$10$p4CETUkkZaXbe2olbS8Kge5Qa/mbgj9SuDuGd2tn0lZO9WxEmBCuu','Nitish nalatawad','male','8197903932','HOUSE NO 209 VIDYAGIRI NAGAR KATTI PLOT','user','2024-07-14 07:43:43','2024-07-14 07:43:43'),(98,'pallavi ','pallu@gmail.com','$2b$10$DEISv4.ykIOGOxsMydkC3.OPbQHqLe5cneZRdn9Gg2oHpTCFxnUBO','pajju','male','6486246842','chichkandi','admin','2024-07-14 07:46:35','2024-07-14 07:46:35'),(99,'praveen teli','peava11@gmail.com','$2b$10$sN1gzy4OMaAbBcQDbq38YOmdvU4geaJSPVhzEEpKvBTapCPRPAUsi','praveen','male','8181818181','shivaji circle','admin','2024-08-01 16:39:12','2024-08-01 16:39:12');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-08-03  9:56:12
