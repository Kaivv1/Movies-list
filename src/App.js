import "./App.css";
import Navbar from "./ui/Header";
import Logo from "./ui/Logo";
import NumResults from "./components/NumResults";
import Search from "./components/Search";
import Main from "./ui/Main";
import Box from "./components/Box";
import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import Loading from "./ui/Loading";
import ErrorMessage from "./ui/ErrorMessage";
import { useMovies } from "./hooks/useMovies";
import Summary from "./components/Summary";
import MovieDetails from "./components/MovieDetails";

function App() {
  const [query, setQuery] = useState("");
  const { movies, error, isLoading } = useMovies(query);
  const [selectedId, setSelectedId] = useState(null);
  console.log(selectedId);

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (selectedId === id ? null : id));
  };
  return (
    <div className="app">
      <Navbar>
        <Logo />
        <Search query={query} onChangeQuery={setQuery} />
        <NumResults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loading />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {!isLoading && error && <ErrorMessage error={error} />}
        </Box>

        <Box>
          {selectedId ? <MovieDetails selectedId={selectedId} /> : <Summary />}
        </Box>
      </Main>
    </div>
  );
}

export default App;
