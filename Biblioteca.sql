-- MariaDB dump 10.19  Distrib 10.6.11-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: Biblioteca
-- ------------------------------------------------------
-- Server version	10.6.11-MariaDB-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Libros`
--

DROP TABLE IF EXISTS `Libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Libros` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ClaveLib` char(4) NOT NULL,
  `Titulo` varchar(255) NOT NULL,
  `Autor` varchar(255) NOT NULL,
  `Año_Publicación` year(4) DEFAULT NULL,
  `FechaObt` date DEFAULT NULL,
  `Genero` varchar(255) DEFAULT NULL,
  `Disponible` char(2) NOT NULL,
  `Cantidad_Disponible` int(3) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Libros`
--

LOCK TABLES `Libros` WRITE;
/*!40000 ALTER TABLE `Libros` DISABLE KEYS */;
INSERT INTO `Libros` VALUES (1,'A001','Caperucita Roja','Charles Perrault ',1954,'2021-10-01','Infantil','Si',24),(2,'A002','Juegos de Ingenio','John Katzenbach',1997,'2020-07-15','Suspenso','Si',11),(3,'A003','Juicio Final','John Katzenbach',1995,'2021-08-11','Suspenso, Ficción','Si',4);
/*!40000 ALTER TABLE `Libros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Prestamos`
--

DROP TABLE IF EXISTS `Prestamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Prestamos` (
  `IDP` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `ClaveLibP` char(4) DEFAULT NULL,
  `TituloP` varchar(255) NOT NULL,
  `Fecha_A` date DEFAULT NULL,
  `Dias_PSoli` int(2) DEFAULT NULL,
  `Telefono` char(10) DEFAULT NULL,
  PRIMARY KEY (`IDP`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Prestamos`
--

LOCK TABLES `Prestamos` WRITE;
/*!40000 ALTER TABLE `Prestamos` DISABLE KEYS */;
INSERT INTO `Prestamos` VALUES (1,'Erika','Zarate','A001','Caperucita Roja','2022-12-01',15,'2871930123'),(2,'Sonia','Flores','A002','Juegos de Ingenio','2022-12-01',21,'2871245687'),(3,'Erika','Zarate','A002','Juegos de Ingenio','2022-12-05',27,'2871930123'),(4,'Erika','Zarate','A002','Juegos de Ingenio','2022-12-05',27,'2871930123');
/*!40000 ALTER TABLE `Prestamos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 21:12:36
