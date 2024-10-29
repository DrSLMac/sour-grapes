import './MoviesContainer.css';
import MoviePoster from '../MoviePoster/MoviePoster';

function MoviesContainer({allMovies, increaseVoteCount, decreaseVoteCount}) {

  
  return (
    <section className='MoviesContainer'>
      {allMovies.map(movie => {
        return <MoviePoster 
          key={movie.id}
          id={movie.id}
          poster={movie.poster_path}
          votes={movie.vote_count}
          title={movie.title}
          increaseVoteCount={increaseVoteCount}
          decreaseVoteCount={decreaseVoteCount}
        />
      })}
    </section>
  );
}

export default MoviesContainer;