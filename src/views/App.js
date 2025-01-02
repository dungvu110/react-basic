import logo from './logo.svg';
import './App.scss';
import MyNewComponent from './Example/MyNewComponent';

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
        <MyNewComponent />
      </header>
    </div>
  );
}

export default App;
