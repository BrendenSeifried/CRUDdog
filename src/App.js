import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home/Home';
import DogList from './views/DogCard/DogList';
import DogDetail from './views/DogCard/DogDetail';
import NewDog from './views/Admin/NewDog';

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

          <Route exact path = '/dogs/new'>
            <NewDog />
          </Route>

          <Route exact path = '/dogs/:id'>
            <DogDetail />
          </Route>

     
          


        </Switch>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
