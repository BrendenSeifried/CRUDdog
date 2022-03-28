import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home/Home';
import DogList from './views/DogCard/DogList';
import DogDetail from './views/DogCard/DogDetail';
import Admin from './views/Admin/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>

          <Route exact path = '/dogs'>
            <DogList />
          </Route>

          <Route exact path = '/dogs/:id'>
            <DogDetail />
          </Route>

          <Route exact path = '/dogs/new'>
            <Admin />
          </Route>
          


        </Switch>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
