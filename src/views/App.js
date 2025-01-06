import logo from './logo.svg';
import './App.scss';
import MyNewComponent from './Example/MyNewComponent.js';
import ListTodo from './Todos/ListTodo.js';

import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav.js';
import Home from './Example/Home.js';

/**
 * 2 components class / function (arrow) 
 * JSX
 */

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <img src={logo} className="App-logo" alt="logo" />

          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path='/todo'>
              <ListTodo />
            </Route>
            <Route path='/about'>
              <MyNewComponent></MyNewComponent>
            </Route>
          </Switch>

        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
