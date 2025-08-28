import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Navbar from './navbar/navbar';
import Student from './ClassComponents/Student';
import Props from './ClassComponents/Props';
import Loginform from './Forms/Loginform';
import Conditionalrendering from './Forms/Conditionalrendering';
import Inputbox from './FuncComponent/Inputbox';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Teacher />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
            {/* Props with functional components */}
            <Route path='/props' element={<Props name="Prasad" age="25" Roll_no="21" />}/>
            <Route path="/Loginform" element={<Loginform />} />
            <Route path='Conditionalrendering' element={<Conditionalrendering/>}/>
            <Route path='/Inputbox' element={<Inputbox/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

// Function based component in same class
// function Seconduser()
// {
//   return (
//     <h1>Here is Second User component</h1>
//   );
// }

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
