import { Component } from "react/cjs/react.production.min";



export class Locations extends Component {


    constructor() {
        super()
        this.state={
            studioData:"",
            location:"",
            isHidden: false
        }
    }

    
  componentDidMount(){

    fetch ("https://ghibliapi.herokuapp.com/locations")
    .then((response) => response.json())
    .then((data) => {
      this.setState({
        studioData: data
      })
    }).catch(console.log)
  }

  toggleButton =() => {
      this.setState({
          isHidden: !this.state.isHidden
      })
  }

    render() {
        const {studioData} = this.state


        const showInfo = studioData && studioData.map((location) => {

    
                return (
                    <ul key={location.id}>
                        <li>Name: {location.name}
                        <p>Climate: {location.climate}</p>
                        <p>Terrain: {location.terrain}</p>
                        </li>
                       
                     </ul>
                )
        })


        return (
            <div className="locations">
            <h2>List of Locations</h2>
            <button onClick={this.toggleButton}>{!this.state.isHidden ? "Show Locations" : "Hide Locations"}</button>
            {this.state.isHidden ? showInfo : ""}
            </div>
        )
    }

}