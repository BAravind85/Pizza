import './App.css';
import Pizza from './Pizza';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='pizza.png' className="App-logo" alt="logo" />
       <h1>Pizza Order</h1>
       <Pizza/>
      </header>
    </div>
  );
}

export default App;
