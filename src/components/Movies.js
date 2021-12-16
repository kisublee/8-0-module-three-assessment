
import { Component } from 'react/cjs/react.production.min';
import './Movies.css';

class Movies extends Component {


    constructor() {
        super()
        this.state={
            studioData:"",
            movie:""
        }
    }


  componentDidMount(){

    fetch ("https://ghibliapi.herokuapp.com/films")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        studioData: data
      })
    }).catch(console.log)
  }



  handleMovie = (e)=> {
    e.preventDefault()
        this.setState({
            movie: e.target.value
        })
    }

  render () {
    const {studioData, movie} = this.state
        console.log(studioData, movie)

    const displayTitles = studioData && studioData.map((movie) => {
        return <option key ={movie.id} value ={movie.title} > {movie.title} </option>
    })

    const showInfo = studioData && studioData.map((movie) => {
    
        if (movie.title === this.state.movie) {
            console.log(movie)
            return (
                <div key={movie.id}>
                <h2>Title: {movie.title}</h2>
                <p>Release Date: {movie.release_date} </p>
                <p>Description: {movie.description}</p>
                 </div>
            )
        } 
 return ""
    })

  return (

        <div className='movies'>
            <h2>Select a Movie</h2>
        <select onChange={this.handleMovie} id="operation" name="operation">
        <option value=""></option>
        {displayTitles}
        </select>
        {showInfo}
        </div>
  )
  }
};

export default Movies;
