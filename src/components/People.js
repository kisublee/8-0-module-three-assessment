
import { Component } from 'react/cjs/react.production.min';
import './People.css';

class People extends Component {


    constructor() {
        super()
        this.state={
            studioData:"",
            person:"",
            personSearched: "",
            clicked: false
        }
    }

   
componentDidMount(){

    fetch ("https://ghibliapi.herokuapp.com/people")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        studioData: data
      })
    }).catch(console.log)
  }



handleSearch = (e)=> {
    e.preventDefault()
        this.setState({
            person: e.target.value
        })
    }

handleSubmit = (e) => {
    e.preventDefault()
   const {studioData, person} = this.state

   let matchingPerson = studioData.find((each) => {
       return each.name.toLowerCase() === person.toLowerCase()
   })


   this.setState({
       personSearched: matchingPerson,
       clicked: true
   })
}



  render () {
    console.log(this.state.studioData, this.state.person, this.state.personSearched, "clicked", this.state.clicked)
  return (

        <div className='people'>
            <h2>Search for a Person</h2>
            <form onSubmit={this.handleSubmit}>
            <input placeholder='Find Your Person' onChange={this.handleSearch} id="values" name="search-person" type="text" />
            <button type='submit'>Submit</button>
            </form>
            {this.state.personSearched && <div key={this.state.personSearched.id}>
                    <h2>Name: {this.state.personSearched.name}</h2>
                    <p>Age: {this.state.personSearched.age }</p>
                    <p>Gender: {this.state.personSearched.gender}</p>
                    </div> 
                    || this.state.clicked && <p>Not Found</p>
            }
        </div>
  )
  }
};

export default People;
