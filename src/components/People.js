
import { Component } from 'react/cjs/react.production.min';
import './People.css';

class People extends Component {


    constructor() {
        super()
        this.state={
            studioData:"",
            person:"",
            isTrue: false
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
    fetch ("https://ghibliapi.herokuapp.com/people")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        studioData: data
      })
    }).catch(console.log)
}


  render () {
    const {studioData, person, isTrue} = this.state
        // console.log(studioData, person)


       const showInfo = this.state.studioData && this.state.studioData.map((person) => {
            if (person.name.toLowerCase() === this.state.person.toLowerCase()) {
                return  (
                <div key={person.id}>
                <h2>Name: {person.name}</h2>
                <p>Age: {person.age }</p>
                <p>Gender: {person.gender}</p>
                 </div>
                )
            }
            return "Not Found"
        })




  return (

        <div className='people'>
            <h2>Search for a Person</h2>
            <form onSubmit={this.handleSubmit}>
            <input  onChange={this.handleSearch}  id="values" name="search-person" type="text" />
            <button onClick={this.isTrue}>Submit</button>
            </form>
            {showInfo}
        </div>
  )
  }
};

export default People;
