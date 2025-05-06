import React,{useState,useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
 const [movies,setmovies] =useState([]);
 const [loading,setloading] =useState(false);
 const [err,seterr]=useState(null);
 

  const movieHandler=  useCallback(async ()=>
    { 
      setloading(true);
      seterr(null);
  
      try{
        
      const response=await fetch('https://swapi.dev/api/films/')
      if(!response.ok){
        throw new Error('Something went wrong!');
      }
      const data=await response.json();
      console.log(data)
  
      const dummyMovies = data.results.map(Element=>{
                    return {id:Element.episode_id,
                            title:Element.title,
                            openingText:Element.opening_crawl,
                            releaseDate:Element.release_date}})
      setmovies(dummyMovies);
      }
      catch(error){
        seterr(error.message);
      }
      
      setloading(false);
  },[])
  
  useEffect(()=>{
    movieHandler()
   },[movieHandler])
  let content=<p>No Movies found</p>
  if(movies.length > 0){
    content=<MoviesList movies={movies} />
  }
  if(loading){
    content=<p>Loading...</p>
  }
  if(err){
    content=<p>{err}</p>
  }
  return (
    <React.Fragment>
      <section>
        <button onClick={movieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
