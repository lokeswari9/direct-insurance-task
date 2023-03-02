import './App.css';
import CheckoutProduct from './CheckoutProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <strong>Checkout Page</strong>
      </header>
      <CheckoutProduct catsData={{ age: '2', breed: 'Basic breed' }} />
    </div>
  );
}

export default App;
