import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Navbar from './navbar/navbar';
import Student from './ClassComponents/Student';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
          </Routes>
        </div>
      </Router>
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
