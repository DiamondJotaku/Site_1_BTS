-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Serveur: 127.0.0.1
-- Généré le : Mar 05 Décembre 2023 à 15:00
-- Version du serveur: 5.5.10
-- Version de PHP: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `bibliothèque`
--

-- --------------------------------------------------------

--
-- Structure de la table `adherant`
--

CREATE TABLE IF NOT EXISTS `adherant` (
  `Id_Adherent` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `Date_naissance` date NOT NULL,
  `Date_adhesion` date NOT NULL,
  `Adresse` varchar(50) NOT NULL,
  `Num_tel` varchar(50) NOT NULL,
  `mail` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_Adherent`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `adherant`
--

INSERT INTO `adherant` (`Id_Adherent`, `Nom`, `Prenom`, `Date_naissance`, `Date_adhesion`, `Adresse`, `Num_tel`, `mail`) VALUES
(1, 'Joestar', 'Jonathan', '2000-04-04', '2012-03-13', '13 avenue du Manoir joestar', '0685723400', 'jonathan.joestar@gmail.com'),
(2, 'Wayne', 'Bruce', '1998-06-22', '2007-02-20', '1007 Mountain Drive', '0777893233', 'bruce.wayne@gmail.com'),
(3, 'Vinsmoke', 'Sanji', '2002-03-02', '2017-10-16', '12e vague d''East Blue', '0682749543', 'sanji.vinsmoke@gmail.com');

-- --------------------------------------------------------

--
-- Structure de la table `auteur`
--

CREATE TABLE IF NOT EXISTS `auteur` (
  `ID_Auteur` varchar(50) NOT NULL,
  `Nom` varchar(50) NOT NULL,
  `Prenom` varchar(50) NOT NULL,
  `Date_naissance` date NOT NULL,
  PRIMARY KEY (`ID_Auteur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `auteur`
--

INSERT INTO `auteur` (`ID_Auteur`, `Nom`, `Prenom`, `Date_naissance`) VALUES
('Bungô Stray Dogs', 'Dazai', 'Osamu', '2000-06-19'),
('Deathnote', 'Yagami', 'Light', '2004-02-28'),
('Kishibe''s Bizarre Adventure', 'Kishibe', 'Rohan', '2001-11-20');

-- --------------------------------------------------------

--
-- Structure de la table `emprunts`
--

CREATE TABLE IF NOT EXISTS `emprunts` (
  `Id_emprunt` int(11) NOT NULL AUTO_INCREMENT,
  `Date_emprunt` date NOT NULL,
  `Duree` int(11) NOT NULL,
  `ID_Adherent` int(11) NOT NULL,
  `Reference_livre` varchar(50) NOT NULL,
  PRIMARY KEY (`Id_emprunt`),
  KEY `ID_Adherent` (`ID_Adherent`),
  KEY `Reference_livre` (`Reference_livre`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `emprunts`
--

INSERT INTO `emprunts` (`Id_emprunt`, `Date_emprunt`, `Duree`, `ID_Adherent`, `Reference_livre`) VALUES
(1, '2023-12-14', 30, 1, '2'),
(2, '2023-12-07', 24, 2, '0'),
(3, '2023-12-30', 42, 3, '1');

-- --------------------------------------------------------

--
-- Structure de la table `livre`
--

CREATE TABLE IF NOT EXISTS `livre` (
  `Reference_livre` varchar(50) NOT NULL,
  `Nbre_pages` int(11) NOT NULL,
  `ID_Auteur` varchar(50) NOT NULL,
  `Date_publication` date NOT NULL,
  `Genre` varchar(50) NOT NULL,
  `Disponibilité` tinyint(1) NOT NULL,
  `Nbre_emprunts` int(11) NOT NULL,
  `Etat` varchar(50) NOT NULL,
  `Nbre_exemplaire` int(11) NOT NULL,
  PRIMARY KEY (`Reference_livre`),
  KEY `ID_Auteur` (`ID_Auteur`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Contenu de la table `livre`
--

INSERT INTO `livre` (`Reference_livre`, `Nbre_pages`, `ID_Auteur`, `Date_publication`, `Genre`, `Disponibilité`, `Nbre_emprunts`, `Etat`, `Nbre_exemplaire`) VALUES
('0', 50, 'Deathnote', '2010-03-21', 'Horeur', 0, 1, 'Bon état', 1),
('1', 73, 'Kishibe''s Bizarre Adventure', '2018-05-15', 'Aventure', 0, 515, 'Bon état', 42),
('2', 115, 'Bungô Stray Dogs', '2012-09-20', 'Thriller', 0, 16, 'Neuf', 12);

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `emprunts`
--
ALTER TABLE `emprunts`
  ADD CONSTRAINT `emprunts_ibfk_2` FOREIGN KEY (`Reference_livre`) REFERENCES `livre` (`Reference_livre`),
  ADD CONSTRAINT `emprunts_ibfk_1` FOREIGN KEY (`ID_Adherent`) REFERENCES `adherant` (`Id_Adherent`);

--
-- Contraintes pour la table `livre`
--
ALTER TABLE `livre`
  ADD CONSTRAINT `livre_ibfk_1` FOREIGN KEY (`ID_Auteur`) REFERENCES `auteur` (`ID_Auteur`);
