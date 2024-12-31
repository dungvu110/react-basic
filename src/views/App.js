import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

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
          Hello World with React
        </p>
        <a
          className="App-link"
          href="https://react.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent></MyComponent>
      </header>
    </div>
  );
}

export default App;
