PrimeFlix
PrimeFlix is a movie discovery web application built with React. It allows users to discover trending movies, search for movies, view detailed movie information, and create a personal watchlist.

PrimeFlix is built for movie discovery, not playback.

Movie information and ratings are provided by The Movie Database (TMDB).

Features
Discover weekly trending movies

Search for movies

View detailed information about individual movies

Display movie ratings using a visual score dial

Add movies to a personal watchlist

Remove movies from the watchlist

Display the number of movies in the watchlist

Responsive design for desktop and mobile screens

Client-side navigation using React Router

Loading and empty states

Technologies Used
React 19

React Router

JavaScript (ES Modules)

Vite

CSS

TMDB API

React Context API

Fetch API

ESLint

Project Structure
primeflix-app/
├── src/
│   ├── api/
│   │   └── movieApi.js
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieRow.jsx
│   │   ├── Navbar.jsx
│   │   ├── ScoreDial.jsx
│   │   └── StateBlock.jsx
│   │
│   ├── context/
│   │   └── WatchListContext.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── MovieDetails.jsx
│   │   ├── Search.jsx
│   │   └── WatchList.jsx
│   │
│   ├── styles/
│   │   └── index.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── README.md

Application Pages
Home
The Home page is the main movie discovery page.

It contains:

A Hero section featuring a trending movie

A horizontally scrollable row of trending movies

Reusable movie cards

Search
The Search page allows users to search TMDB for movies.

Search results are displayed using the reusable MovieCard component, and users can add movies directly to their watchlist.

If no results are found, PrimeFlix displays an empty-state message.

Movie Details
The Movie Details page displays information about a selected movie, including:

Movie poster

Title

TMDB rating

Release date

Runtime

Genres

Movie overview

Movie IDs are obtained from the URL using React Router’s useParams().

Watchlist
The Watchlist page displays movies saved by the user.

Users can:

View saved movies

Remove movies from their watchlist

See an empty-state message when the watchlist contains no movies

The current implementation stores the watchlist in React state, so it is not persisted after a page refresh.

API Integration
PrimeFlix uses the TMDB API to retrieve movie information.

The API key is stored in a Vite environment variable:

VITE_TMDB_API_KEY=your_api_key_here

The API integration provides functions such as:

getTrendingMovies()

which retrieves weekly trending movies, and:

getMovieDetails(id)

which retrieves information about a specific movie.

The Search page also uses the TMDB movie search endpoint to retrieve results based on the user’s search query.

Installation
Clone the repository and move into the project directory:

git clone <repository-url>
cd primeflix-app

Install the dependencies:

npm install

Create a .env file and add your TMDB API key:

VITE_TMDB_API_KEY=your_api_key_here

Running the Application
Start the Vite development server:

npm run dev

Vite will provide a local development URL in the terminal.

Code Quality
PrimeFlix uses ESLint for code quality checks.

Run:

npm run lint

Routing
PrimeFlix uses React Router for client-side navigation.

Route

Page

Description

/

Home

Discover trending movies

/search

Search

Search for movies

/movie/:id

Movie Details

View information about a movie

/watchlist

Watchlist

Manage saved movies

State Management
React’s built-in state management features are used throughout the application.

Local State
useState is used for component-level state such as:

Search input

Search results

Trending movies

Selected movie details

Side Effects
useEffect is used to fetch movie data when components load or when a movie ID changes.

Context API
The WatchListContext provides shared watchlist state across the application.

It exposes:

watchList
addToWatchList()
removeFromWatchList()

This allows components such as the Navbar, Search page, and Watchlist page to access the same watchlist state.

Reusable Components
MovieCard
Displays a movie poster, title, and rating. Clicking the card navigates to the movie’s details page.

ScoreDial
Converts a movie’s TMDB rating from a 0–10 score into a percentage and displays it using a circular CSS visualization.

StateBlock
Provides reusable loading, error, and empty states.

Navbar
Provides:

PrimeFlix branding

Home navigation

Watchlist navigation

Watchlist count

Movie search input

Hero
Fetches trending movies and displays the first trending movie’s title and overview.

MovieRow
Fetches trending movies and renders them as reusable MovieCard components.

Footer
Provides PrimeFlix’s footer and TMDB attribution.

Design
PrimeFlix uses a dark-themed interface designed around a movie-streaming/discovery aesthetic.

The design includes:

Dark background

Yellow/gold accent color

Movie cards

Circular rating indicators

Sticky navigation

Horizontal movie scrolling

Responsive mobile layout

Hover effects and transitions

The primary accent color is:

#f5c518

Current Limitations
Watchlist data is not persisted after a page refresh.
PrimeFlix provides movie discovery but does not support movie playback.
Search functionality can be improved further.
Future Improvements
Persist watchlist data using local storage.
Improve search functionality.
Add TV show discovery.
Add movie trailers and additional movie information.
Team Project
PrimeFlix was developed as a collaborative team project. Team members contributed to different parts of the application, including the UI, components, routing, API integration, state management, and styling.

Acknowledgements
Movie data and images are provided by The Movie Database (TMDB).

PrimeFlix is not affiliated with or endorsed by TMDB.

PrimeFlix — built for movie discovery, not playback.