import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './views/Home/Home';
import DogList from './components/DogCard/DogList';
import DogDetail from './components/DogCard/DogDetail';

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

        </Switch>
  
      </div>
    </BrowserRouter>
  );
}

export default App;
