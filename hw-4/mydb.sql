-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 31, 2021 at 10:54 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `films`
--

CREATE TABLE `films` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `genre` varchar(255) NOT NULL,
  `scenarist` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `production` varchar(255) NOT NULL,
  `stars` varchar(255) NOT NULL,
  `year` int(11) NOT NULL,
  `images` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `rating` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `films`
--

INSERT INTO `films` (`id`, `title`, `description`, `genre`, `scenarist`, `director`, `production`, `stars`, `year`, `images`, `time`, `rating`) VALUES
(1, 'Red 2', 'Retired CIA agent Frank Moses reunites his unlikely team of elite operatives for a global quest to track down a missing portable nuclear device.', 'Comedy', 'Jon Hoeber, Erich Hoeber', 'Dean Parisot', 'Summit Entertainment, Di Bonaventura Pictures, DC Entertainment', 'Bruce Willis, Helen Mirren, John Malkovich', 2013, 'img/Red2.jpg', '1h 56min', '6.6'),
(3, 'The Dictator', 'The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.', 'Comedy', 'Sacha Baron Cohen, Alec Berg ', 'Larry Charles', 'Paramount Pictures, Four by Two Films', 'Sacha Baron Cohen, Anna Faris, John C. Reilly', 2012, 'img/Dictator.jpg', '1h 23min', '6.4'),
(4, 'Fast and Furious Presents: Hobbs and Shaw', 'Lawman Luke Hobbs (Dwayne \"The Rock\" Johnson) and outcast Deckard Shaw (Jason Statham) form an unlikely alliance when a cyber-genetically enhanced villain threatens the future of humanity.', 'Action ', 'Chris Morgan, Drew Pearce', 'David Leitch', 'Chris Morgan Productions, Dentsu, Seven Bucks Productions ', 'Dwayne Johnson, Jason Statham, Idris Elba ', 2019, 'img/Fast.jpg', '2h 17min', '6.4'),
(5, 'Avengers: Infinity War', 'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.', 'Action', 'Christopher Markus, Stephen McFeely', 'Anthony Russo, Joe Russo', 'Marvel Studios, Jason Roberts Productions, South Pictures', 'Robert Downey Jr., Chris Hemsworth, Mark Ruffalo ', 2018, 'img/Avengers.jpg', '2h 29min', '8.4'),
(6, 'Casino Royale', 'After earning 00 status and a licence to kill, Secret Agent James Bond sets out on his first mission as 007. Bond must defeat a private banker funding terrorists in a high-stakes game of poker at Casino Royale, Montenegro.', 'Action', 'Neal Purvis, Robert Wade', 'Martin Campbell', 'Columbia Pictures, Eon Productions, Casino Royale Productions', 'Daniel Craig, Eva Green, Judi Dench', 2006, 'img/Bond.jpg', '2h 24min', '8.0'),
(7, 'The Lord of the Rings: The Fellowship of the Ring', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 'Adventure', 'J.R.R. Tolkien (novel), Fran Walsh', 'Peter Jackson', 'New Line Cinema, WingNut Films, The Saul Zaentz Company', 'Elijah Wood, Ian McKellen, Orlando Bloom', 2001, 'img/Lotr.jpg', '2h 58min', '8.8'),
(8, 'The Hobbit: An Unexpected Journey', 'A reluctant Hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home, and the gold within it from the dragon Smaug.', 'Adventure', 'Fran Walsh, Philippa Boyens', 'Peter Jackson', 'Metro-Goldwyn-Mayer (MGM), New Line Cinema, WingNut Films', 'Martin Freeman, Ian McKellen, Richard Armitage ', 2012, 'img/Hobbit.jpg', '2h 49min', '7.8'),
(9, 'Pirates of the Caribbean: On Stranger Tides ', 'Jack Sparrow and Barbossa embark on a quest to find the elusive fountain of youth, only to discover that Blackbeard and his daughter are after it too.', 'Adventure', 'Ted Elliott, Terry Rossio', 'Rob Marshall', 'Walt Disney Pictures, Jerry Bruckheimer Films, Moving Picture Company (MPC)', 'Johnny Depp, Penélope Cruz, Ian McShane', 2011, 'img/Pirates.jpg', '2h 16min', '6.6'),
(10, 'Shutter Island', 'In 1954, a U.S. Marshal investigates the disappearance of a murderer who escaped from a hospital for the criminally insane.', 'Thriller', 'Laeta Kalogridis, Dennis Lehane', 'Martin Scorsese', 'Paramount Pictures, Phoenix Pictures, Sikelia Productions', 'Leonardo DiCaprio, Emily Mortimer, Mark Ruffalo ', 2010, 'img/Island.jpg', '2h 18min', '8.2'),
(11, 'Stonehearst Asylum', 'An Oxford graduate takes up a job in a mental asylum, only to discover that the \"revolutionary\" new treatments are inhumane, and that there is more going on than meets the eye.', 'Thriller', 'Edgar Allan Poe (based on a short story by), Joe Gangemi', 'Brad Anderson', 'Icon Productions, Sobini Films', 'Kate Beckinsale, Jim Sturgess, David Thewlis', 2014, 'img/Asylum.jpg', '1h 52min', '6.8'),
(12, 'The Silence of the Lambs', 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', 'Thriller', 'Thomas Harris (novel), Ted Tally', 'Jonathan Demme', 'Strong Heart/Demme Production, Orion Pictures', 'Jodie Foster, Anthony Hopkins, Lawrence A. Bonney ', 1991, 'img/Lamb.jpg', '1h 58min', '8.6'),
(13, 'Interstellar', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.', 'Sci-Fi', 'Jonathan Nolan, Christopher Nolan', 'Christopher Nolan', 'Paramount Pictures, Warner Bros., Legendary Entertainment', 'Matthew McConaughey, Anne Hathaway, Jessica Chastain', 2014, 'img/Interstellar.jpg', '2h 49min', '8.6'),
(14, 'The Matrix', 'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.', 'Sci-Fi', 'Lilly Wachowski, Lana Wachowski', 'Lilly Wachowski, Lana Wachowski', 'Warner Bros., Village Roadshow Pictures, Groucho Film Partnership', 'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss', 1999, 'img/Matrix.jpg', '2h 16min', '8.7'),
(16, 'The Notebook', 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.', 'Romance', 'Jeremy Leven, Jan Sardi', 'Nick Cassavetes', 'New Line Cinema, Gran Via, Avery Pix', 'Gena Rowlands, James Garner, Rachel McAdams', 2004, 'img/Notebook.jpg', '2h 3min', '7.8'),
(17, 'Pretty Woman', 'A man in a legal but hurtful business needs an escort for some social events, and hires a beautiful prostitute he meets... only to fall in love.', 'Romance', 'J.F. Lawton', 'Garry Marshall', 'Touchstone Pictures, Silver Screen Partners IV', 'Richard Gere, Julia Roberts, Jason Alexander', 1990, 'img/Woman.jpg', '1h 59min', '7.0'),
(18, 'Silver Linings Playbook', 'After a stint in a mental institution, former teacher Pat Solitano moves back in with his parents and tries to reconcile with his ex-wife. Things get more challenging when Pat meets Tiffany, a mysterious girl with problems of her own.', 'Romance', 'David O. Russell, Matthew Quick (novel)', 'David O. Russell', 'The Weinstein Company', 'Bradley Cooper, Jennifer Lawrence, Robert De Niro', 2012, 'img/Silver.jpg', '2h 2min', '7.7'),
(19, '12 Years a Slave', 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.', 'Drama', 'John Ridley, Solomon Northup (based on \"Twelve Years a Slave\" by)', 'Steve McQueen', 'New Regency Productions, River Road Entertainment, Plan B Entertainment', 'Chiwetel Ejiofor, Michael Kenneth Williams, Michael Fassbender', 2013, 'img/12.jpg', '2h 14min', '8.1'),
(20, 'The Departed', 'An undercover cop and a mole in the police attempt to identify each other while infiltrating an Irish gang in South Boston.', 'Drama', 'William Monahan, Alan Mak', 'Martin Scorsese', 'Warner Bros., Plan B Entertainment, Initial Entertainment Group (IEG)', 'Leonardo DiCaprio, Matt Damon, Jack Nicholson', 2006, 'img/Departed.jpg', '2h 31min', '8.5'),
(21, 'Hidden Figures', 'The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.', 'Drama', 'Allison Schroeder, Theodore Melfi', 'Theodore Melfi', 'Fox 2000 Pictures, Chernin Entertainment, Levantine Films', 'Taraji P. Henson, Octavia Spencer, Janelle Monáe', 2016, 'img/Figures.jpg', '2h 7min', '7.8'),
(22, 'The Big Wedding', 'A long-divorced couple fakes being married as their family unites for a wedding.', 'Comedy', 'Justin Zackham, Jean-Stéphane Bron ', 'Justin Zackham', 'Two Ton Films, Millennium Films', 'Robert De Niro, Diane Keaton, Katherine Heigl', 2013, 'Wedding.jpg', '1h 29min', '5.6'),
(24, 'Taxi Driver', 'A mentally unstable veteran works as a nighttime taxi driver in New York City, where the perceived decadence and sleaze fuels his urge for violent action by attempting to liberate a presidential campaign worker and an underage prostitute.', 'Drama', 'Paul Schrader', ' Martin Scorsese', 'Columbia Pictures, Columbia Pictures, Bill/Phillips', 'Robert De Niro, Jodie Foster, Cybill Shepherd', 1976, 'Taxi.jpg', '1h 54min', '8.3'),
(25, 'Avatar', 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', 'Sci-Fi', 'James Cameron', 'James Cameron', 'Twentieth Century Fox, Dune Entertainment, Lightstorm Entertainment', 'Sam Worthington, Zoe Saldana, Sigourney Weaver', 2009, 'Avatar.jpg', '2h 42min', '7.8');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `to_date` datetime NOT NULL,
  `admin` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `to_date`, `admin`, `name`) VALUES
(1, 'blabla', '$2y$10$e.zln.3zcapxSIMxth0jqezIH0U2TU44Bl0wVLWkKuwwwBbkzLx8C', 'blabla@bla', '2021-01-29 19:53:56', 'admin', ''),
(2, '', '$2y$10$OmzCaj0bxz0geDk7hg5E.eAM/dtvjq59TmOjNM5iVANf3MDqutoAS', '', '2021-01-29 20:04:17', '', ''),
(3, 'sava', '$2y$10$unOp4tGKh4Jlmpwod43PpOQv5GSIlE7glP70Ja5BU2Ydho75T71q.', 'savanikolic@gmail.com', '2021-01-31 17:15:46', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `films`
--
ALTER TABLE `films`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `films`
--
ALTER TABLE `films`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
