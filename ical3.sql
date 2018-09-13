-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Dim 17 Septembre 2017 à 21:56
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `ical3`
--

-- --------------------------------------------------------

--
-- Structure de la table `completers`
--

CREATE TABLE IF NOT EXISTS `completers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `homeworkid` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `homeworkid` (`homeworkid`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=22 ;

--
-- Contenu de la table `completers`
--

INSERT INTO `completers` (`id`, `homeworkid`, `user`) VALUES
(14, 10, 't5baillo'),
(15, 11, 't5baillo'),
(16, 8, 'e5roue'),
(17, 9, 't5baillo'),
(18, 7, 't5baillo'),
(19, 8, 't5baillo'),
(20, 12, 'b5aubert'),
(21, 14, 't5baillo');

-- --------------------------------------------------------

--
-- Structure de la table `homeworks`
--

CREATE TABLE IF NOT EXISTS `homeworks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `stream` varchar(255) NOT NULL,
  `end` timestamp NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=15 ;

--
-- Contenu de la table `homeworks`
--

INSERT INTO `homeworks` (`id`, `stream`, `end`, `title`, `author`, `description`) VALUES
(7, 'test-chanel', '2017-09-21 20:00:00', 'dfghjklm', 't5baillo', 'dsfsghjklmù'),
(8, 'test-chanel', '2017-09-21 20:00:00', 'fdghjkdfghjk', 't5baillo', 'gfhjk'),
(9, 'test-chanel', '2017-09-20 20:00:00', 'xcvfgbhn', 't5baillo', 'dfghjklm'),
(10, 'test-chanel', '2017-09-11 20:00:00', 'sdfghjklm', 't5baillo', 'dfghjklmù'),
(11, 'test-chanel', '2017-09-22 20:00:00', 'xdfsgjklm', 't5baillo', 'dsfghjklm'),
(12, 'S5A-A', '2017-09-18 20:00:00', 'exercices d''ASA', 't5baillo', 'si tu veux pas être misérable'),
(13, 'test-chanel', '2017-09-15 20:00:00', 'Projet ENM', 'e5roue', 'Finir révision jusqu''au PFD inclus.\nEtablir schéma cinématique'),
(14, 's5a-a', '0000-00-00 00:00:00', 'Féliciter Titouan', 'b5aubert', 'Il est trop fort ');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `completers`
--
ALTER TABLE `completers`
  ADD CONSTRAINT `completers_ibfk_1` FOREIGN KEY (`homeworkid`) REFERENCES `homeworks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
