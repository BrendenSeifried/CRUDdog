import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home/Home';
import DogCard from './components/DogCard/DogList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>

          <Route exact path = '/dogs'>
            <DogCard />
          </Route>

        </Switch>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
