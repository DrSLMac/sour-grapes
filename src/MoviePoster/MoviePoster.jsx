import "./MoviePoster.css";

function MoviePoster({
  id,
  poster,
  votes,
  title,
  increaseVoteCount,
  decreaseVoteCount,
}) {

  return (
    <div className="moviePoster">
    {/* <button className="poster_button"> */}
      <img src={poster} alt={title} onClick={()=>console.log("it was clicked")}/>
    {/* </button> */}

      <div className="voting">
        <button className="upvote" onClick={() => increaseVoteCount(id)}>👍🏼</button>
        <p>{votes}</p>
        <button className="downvote" onClick={() => decreaseVoteCount(id)}>👎🏼</button>
      </div>

    </div>
  );
}

export default MoviePoster;
