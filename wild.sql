# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Hôte: 127.0.0.1 (MySQL 5.7.21)
# Base de données: wild-not-you
# Temps de génération: 2018-04-13 07:58:16 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Affichage de la table bar
# ------------------------------------------------------------

DROP TABLE IF EXISTS `bar`;

CREATE TABLE `bar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `numbers` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `bar` WRITE;
/*!40000 ALTER TABLE `bar` DISABLE KEYS */;

INSERT INTO `bar` (`id`, `type`, `name`, `numbers`)
VALUES
	(1,'fun','Caisses de St Emilion',928),
	(2,'fun','Heures de Mario-Kart',221001),
	(3,'fun','Toasts de foie gras',2137),
	(4,'serious','Collaborateurs',2000),
	(5,'serious','Entreprises Partenaires',500),
	(6,'serious','Métiers',200);

/*!40000 ALTER TABLE `bar` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table blog
# ------------------------------------------------------------

DROP TABLE IF EXISTS `blog`;

CREATE TABLE `blog` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL DEFAULT '',
  `date_parution` date NOT NULL,
  `content` varchar(500) NOT NULL DEFAULT '',
  `images` binary(255) NOT NULL DEFAULT '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0',
  `autor` varchar(255) NOT NULL DEFAULT '',
  `category` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(500) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Affichage de la table collab
# ------------------------------------------------------------

DROP TABLE IF EXISTS `collab`;

CREATE TABLE `collab` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `images` binary(1) NOT NULL DEFAULT '\0',
  `age` varchar(255) NOT NULL DEFAULT '',
  `description` varchar(500) NOT NULL DEFAULT '',
  `techno` varchar(255) NOT NULL DEFAULT '',
  `experience` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Affichage de la table contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `contact`;

CREATE TABLE `contact` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `horaires` varchar(255) NOT NULL DEFAULT '',
  `adresse` varchar(255) NOT NULL DEFAULT '',
  `tel` varchar(255) NOT NULL DEFAULT '',
  `mail` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Affichage de la table login
# ------------------------------------------------------------

DROP TABLE IF EXISTS `login`;

CREATE TABLE `login` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `encrypted_password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;

INSERT INTO `login` (`id`, `name`, `email`, `password`, `created_at`, `updated_at`, `encrypted_password`)
VALUES
	(1,'test','test@test.com','test','2018-04-11 12:10:08','2018-04-11 12:10:08','3caa173fa53704627bedfdd939a511e1f97ff7375259d9da8cbdf9a2933a05203fb2fe0ef762a0cdc749b848d8b4e9143a6ccaf88442e13ed38e600d276fa81c'),
	(2,'Hey','','','2018-04-11 12:10:22','2018-04-11 12:10:22','d9301b0896e00a9d7a3bb52ac68638ae0af0b80aadc8ba36a081f01b966312d113a0f4922af67a6b493b7c36da1423c5348aaab20c8cd6c2f04c3f0b1516c2d0'),
	(3,'Fanny','f.gaudin@gmail.com','fanny','2018-04-11 12:16:19','2018-04-11 12:16:19','33b3d3fc7c170be9d1dc9124355f88dfa586a866191df5d0a52f99be4b8f5bd57ae439ef559b1030ea421d1fa762aee893a31e95675d3a41f5c6145a1d1d2fb3'),
	(5,'test2','test','test','2018-04-11 12:24:29','2018-04-11 12:24:29','312fe3174bb3da907c1cf7330f04685f8ed8cd99b461280b312be58a1fd126f9ecde02bc195a15b86b66be73b9600eddd4380fbf78d1bf167278cd1e1e72635a');

/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;


# Affichage de la table missions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `missions`;

CREATE TABLE `missions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nom_poste` varchar(255) NOT NULL DEFAULT '',
  `duree` varchar(255) NOT NULL,
  `localisation` varchar(255) NOT NULL,
  `diplome` varchar(255) NOT NULL DEFAULT '',
  `experience` varchar(255) NOT NULL,
  `desc_poste` varchar(255) NOT NULL DEFAULT '',
  `desc_entreprise` varchar(255) NOT NULL DEFAULT '',
  `compétences` varchar(255) NOT NULL DEFAULT '',
  `date_publication` date NOT NULL,
  `logo` binary(1) NOT NULL DEFAULT '\0',
  `images` binary(1) NOT NULL DEFAULT '\0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Affichage de la table partner
# ------------------------------------------------------------

DROP TABLE IF EXISTS `partner`;

CREATE TABLE `partner` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `images` binary(1) NOT NULL DEFAULT '\0',
  `description` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;




/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
