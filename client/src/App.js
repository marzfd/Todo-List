import logo from './Logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
       <img src={logo} className="logo" alt="logo" />
        <h5>TODO List App</h5>
      </header>

      <main>
       <img src={logo} className="big-logo" alt="logo" />


      </main>

      <footer>
        <p>&copy; 2022 Created By Marzieh !</p>
      </footer>
    </div>
  );
}

export default App;
