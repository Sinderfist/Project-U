import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  path='/' />
          <Route/>
          <Route/>
        </Switch>
      </Router>
      <Home /> 
    </div>
  );
}

export default App;
