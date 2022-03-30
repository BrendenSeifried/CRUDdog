import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from 'react';
import './App.css';

import Home from './views/Home/Home';
import DogList from './views/DogCard/DogList';
import DogDetail from './views/DogCard/DogDetail';
import NewDog from './views/NewDog/NewDog';
import EditDog from './views/EditDog/EditDog';
import Footer from './components/Footer';
import Authorize from './views/Authorize/Authorize';
import Header from './components/Header';
import { getUser } from './services/fetchauth';


function App() {
  const [currentUser, setCurrentUser] = useState(getUser());
 
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>

          <Route exact path = '/auth'>
            <Authorize setCurrentUser={setCurrentUser}/>
          </Route>

          <Route exact path = '/dogs'>
            <DogList />
          </Route>

          <Route exact path = '/dogs/new'>
            {currentUser ? <NewDog /> : <Redirect to='/auth'/>}
          </Route>

          <Route exact path = '/dogs/:id/edit'>
            <EditDog />
          </Route>

          <Route exact path = '/dogs/:id'>
            <DogDetail />
          </Route>


        </Switch>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
