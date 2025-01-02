import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import MyFormComponent from './Example/MyFormComponent';

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
        <MyComponent></MyComponent>
        <MyFormComponent></MyFormComponent>
      </header>
    </div>
  );
}

export default App;
