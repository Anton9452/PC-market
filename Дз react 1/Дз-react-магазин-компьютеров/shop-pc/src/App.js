
import './App.css';
import Card from './elements/cards/Card';
import Head from './elements/headers/head';

function App() {
  return (
    <div className="App">
      <div>
        <Head />
      </div> 
      <div className='cards' >
        <Card
        prise="100000р"
        discount="20% Скидка"
        name="game-pc"
        />
        <Card
        prise="125000р"
        discount=""
        name="game-pc"
        />
        <Card
        prise="113000р"
        discount=""
        name="game-pc"
        />
        <Card
        prise="1200000р"
        discount="20% Скидка"
        name="game-pc"
        />
        <Card
        prise="152000р"
        discount=""
        name="game-pc"
        />
        <Card
        prise="143000р"
        discount="20% Скидка"
        name="game-pc"
        />  
      </div>
    </div>
  );
}

export default App;
