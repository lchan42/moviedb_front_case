import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MovieList from './components/MovieList';


function App() {

  const [movies, setMovies] = useState([
    {
      "adult": false,
      "backdrop_path": "/4qCqAdHcNKeAHcK8tJ8wNJZa9cx.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 11,
      "original_language": "en",
      "original_title": "Star Wars",
      "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      "popularity": 159.306,
      "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      "release_date": "1977-05-25",
      "title": "Star Wars",
      "video": false,
      "vote_average": 8.204,
      "vote_count": 19870
    },
    {
      "adult": false,
      "backdrop_path": "/k6EOrckWFuz7I4z4wiRwz8zsj4H.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 140607,
      "original_language": "en",
      "original_title": "Star Wars: The Force Awakens",
      "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
      "popularity": 78.126,
      "poster_path": "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
      "release_date": "2015-12-15",
      "title": "Star Wars: The Force Awakens",
      "video": false,
      "vote_average": 7.284,
      "vote_count": 18844
    },
    {
      "adult": false,
      "backdrop_path": "/5Iw7zQTHVRBOYpA0V6z0yypOPZh.jpg",
      "genre_ids": [
        12,
        28,
        878
      ],
      "id": 181808,
      "original_language": "en",
      "original_title": "Star Wars: The Last Jedi",
      "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      "popularity": 69.815,
      "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
      "release_date": "2017-12-13",
      "title": "Star Wars: The Last Jedi",
      "video": false,
      "vote_average": 6.808,
      "vote_count": 14782
    },
  ]

  )

  const env = (variable) => process.env[variable]
  console.log(env("REACT_APP_TEST"))

  const getMovieRequest = async () => {
    const url = 'https://api.themoviedb.org/3/search/movie?query=star%20%20%20%20&include_adult=false&language=en-US&page=1';
    const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: process.env.REACT_APP_API_AUTH
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error('error:' + err));
  }



  useEffect(()=>{

  },[])

  return (
      <div className='container-fluid movie_app'>
        <div className='row'>
          <MovieList movies={movies}/>
        </div>
      </div>
  );
}

export default App;
