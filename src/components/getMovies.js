import React, { useEffect } from "react";



function Movie(){

	// const getMovieRequest = async () => {
	// 	const url = ''
	// 	const response = await fetch(url)
	// 	const responseJson = await response.json();

	// 	console.log(responseJson)
	// }

	const getMovie = () => {
		fetch("https://api.themoviedb.org/3/discover/movie?api_key=d38af7faa64af95a2676cd86fc7065e5")
		.then(res => res.json())
		.then(json => console.log(json.results))
	}
	useEffect(() => {
		getMovie()
	}, [])

	return (
		<div>
			getMovie
		</div>
	)
}

export default Movie
