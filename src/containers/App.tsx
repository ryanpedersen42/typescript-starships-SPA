import * as React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export interface IShips {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: number;
}

interface IAppProps {
}

interface IAppState {
  starships: Array<IShips>;
  searchfield: string;
}

class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps) {
    super(props)
    this.state = {
      starships: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://swapi.co/api/starships')
      .then(response=> response.json())
      .then(ships => {this.setState({ starships: ships.results})});
  }

  onSearchChange = (event: React.SyntheticEvent<HTMLInputElement>): void => {
    this.setState({ searchfield: event.currentTarget.value })
  }

  render() {
    const { starships, searchfield } = this.state;
    const filteredStarships = starships.filter(ship =>{
      return ship.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !starships.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1 white'>Starships</h1>
          <h2 className="white">Check our inventory before you come in.</h2>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList starships={filteredStarships} />
          </Scroll>
        </div>
      );
  }
}

export default App;