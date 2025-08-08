import logo from './logo.svg';
import './App.css';
import User from './User'
import Student from './ClassComponents/Student';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <User/>
      <Seconduser/>
      <Student/>
      <Teacher/>
    </div>
  );
}

// Function based component in same class
function Seconduser()
{
  return (
    <h1>Here is Second User component</h1>
  );
}

// Class based component within one class
class Teacher extends Component{
  constructor()
  {
    super();
    this.data={
      name :  "Prasad"
    }
  }
  render()
  {
    return(
      <div>Hey Its Teacher Component and welcome {this.data.name}</div>
    )
  }
}
export default App;
