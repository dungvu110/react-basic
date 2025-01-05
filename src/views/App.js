import logo from './logo.svg';
import './App.scss';
import ListTodo from './Todos/ListTodo';

/**
 * 2 components class / function (arrow) 
 * JSX
 */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple TODO apps with React
        </p>
        <ListTodo />
      </header>
    </div>
  );
}

export default App;
