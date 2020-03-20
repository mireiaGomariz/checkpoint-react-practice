import React, {Component} from 'react';
import './App.css';
import People from './component/people'

class App extends Component {
  state = {
    people: [],
    favorites: [],
    isLoading: true,
    noFavorites: true,

  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(data => {
        const myPeople = data.results
        this.setState({
          people: myPeople,
          isLoading: false,
        })
      })
  }

  addFavorite = event => {
    const personIndex = event.target.id;
    const selectedPerson = this.state.people[personIndex];

    let myFavorites = [...this.state.favorites]
    myFavorites.push(selectedPerson);
    this.setState({
      favorites: myFavorites,
      noFavorites: false,
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.isLoading
        ? <h1>Loading..</h1>
        :
          <div className="main-wrapper">
            <div className="people-list">
            {
              this.state.people.map((person, index) =>
              <People
              key={index} id={index}
              name={person.name} gender={person.gender} mass={person.mass} height={person.height} action={this.addFavorite} />
              )
            }
            </div>
            <div>
              <h2>Your Beloved Ones</h2>
              {
                this.state.noFavorites
                ? <p>Theres no favorites yet</p>
                : this.state.favorites.map(favorite => {
                  <div>
                    <p>name: {favorite.name}</p>
                    <p>gender: {favorite.gender}</p>
                    <p>Height: {favorite.height}</p>
                    <p>mass: {favorite.mass}</p>
                  </div>
                })
              }
            </div>

        </div>
      }
      </div>

    );
  }
}

export default App;
