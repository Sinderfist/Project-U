import './App.css';
import DisplayPage from './Components/DisplayPage';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom"
import LandingPage from './Components/LandingPage';
import PokeSearch from './Components/PokeSearch';
import PokeBallSearch from './Components/PokeBallSearch';
import PokeGameSearch from './Components/PokeGameSearch';

function App() {
  return (
    <div className="App">
      <nav>
        
      </nav>
      <Router>
        <Switch>
          {/* This is the home page */}
          <Route  path= '/' exact component={LandingPage}/>
          <Route path='/pokeSearch' component={PokeSearch} />
          <Route path='/pokeBallSearch' component={PokeBallSearch}/>
          <Route path='/pokeGameSearch' component={PokeGameSearch}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
