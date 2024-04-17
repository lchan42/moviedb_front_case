import React from "react";

const APIimgUrl = "https://image.tmdb.org/t/p/w500"
const imgStyle  = {
	// width: "200px",
	// height:"250px",
}

const MovieList = (props) => {
	return(
		<>
			{props.movies.map((movie, index) =>
			<div key={movie.id} className="d-flex justify-content-start m-3">
				<img
					style={imgStyle}
					src={APIimgUrl+movie.poster_path}
				/>
			</div>



			// <div className="d-flex justify-content-start m-3" key={movie.id}>
			// <div key={movie.id}>
				// <img style={style}
				// 	src={`${imgUrl}${movie.poster_path}`} alt ='movie'
				// ></img>
			// </div>

			)}
		</>
	)
}

export default MovieList;
