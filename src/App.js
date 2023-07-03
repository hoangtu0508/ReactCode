import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function Register () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = () => {
    console.log(name, email);
  }
  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <h6>{name}</h6>
      <input value={email} onChange={(e) => setEmail(e.target.value)}></input>
      <button onClick={handleRegister}>Register</button>
    </>
  )
}

function GameButton () {
  const [number, setNumber] = useState('');
  
  const handleGameClick = () => {
    setNumber(Math.floor(Math.random() * 100));
  }

  return (
    <button onClick={handleGameClick}>Ramdom {number}</button>
  )
}

function Button() {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    setCount(count + 1)
  }

  return (
    <button onClick={handleClickButton}>Click Here {count}</button>
  );
}

const products = [
  {id: 1, name: "name 1"},
  {id: 2, name: "name 2"},
  {id: 3, name: "name 3"}
]

const list = products.map(product => 
  <li key={product.id}>{product.name}</li>
);

function App() {
  return (
    <div className="App">
      <Button />
      <div>
        <ul>{list}</ul>
      </div>
      <GameButton />
      <Register />
    </div>
  );
}

export default App;
