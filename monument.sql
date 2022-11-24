-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2022 a las 13:58:36
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `monumentos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monument`
--

CREATE TABLE `monument` (
  `id` int(255) NOT NULL,
  `code` text NOT NULL,
  `country` text NOT NULL,
  `loc` text NOT NULL,
  `city` text NOT NULL,
  `name` text NOT NULL,
  `description` text NOT NULL,
  `urlPhoto` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `monument`
--

INSERT INTO `monument` (`id`, `code`, `country`, `loc`, `city`, `name`, `description`, `urlPhoto`) VALUES
(1, 'DE', 'Alemania', '45.4646463, -2.34564564', 'Berlín', 'Muro de Berlín', 'El Muro de Berlín dividía la ciudad de Berlín durante la Guerra Fría', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg'),
(2, 'IT', 'Italia', '45.4646463, -2.34564564', 'Roma', 'Coliseo Romano', 'El coliseo romano es muy antiguo', 'https://historia.nationalgeographic.com.es/medio/2018/03/01/coliseo-romano_16022ed4_1280x853.jpg'),
(3, 'ES', 'España', '45.4646463, -2.34564564', 'Sevilla', 'La giralda', 'La Giralda es uno de los monumentos más antiguos de Sevilla y fue creado en la era de Al-Andalus', 'https://urbansevilla.es/wp-content/uploads/2019/06/la-giralda-sevilla-airpano.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `monument`
--
ALTER TABLE `monument`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `monument`
--
ALTER TABLE `monument`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
