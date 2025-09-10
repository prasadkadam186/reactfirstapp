import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component, useState } from 'react';
import Navbar from './navbar/navbar';
import Student from './Components/ClassComponents/Student';
import Props from './Components/ClassComponents/Props';
import Loginform from './Forms/Loginform';
import Conditionalrendering from './Forms/Conditionalrendering';
import Inputbox from './Components/FuncComponent/Inputbox';
import ConstructorClass from './Life-cycle-methods/ConstructorClass'
import RenderMethodClass from './Life-cycle-methods/RenderMethodClass'
import ComponentDidMount from './Life-cycle-methods/ComponentDidMount';
import ComponentDidUpdate from './Life-cycle-methods/ComponentDidUpdate';
import ComponentShouldUpdate from './Life-cycle-methods/ComponentShouldUpdate';
import ComponentWillUnmountParent from './Life-cycle-methods/ComponentWillUnmountParent'
import UserEffectHook from './Hooks/UseEffectHooks'
import UseEffectWithConditionOnState from './Hooks/UseEffectWithConditionOnState'
import UseEffectWithConditionForPropsParent from './Hooks/UseEffectWithConditionForPropsParent'
import ArrayListWithMap from './Collection/ArrayListWithMap'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState("Test User");
  function passFunctionAsProps()
  {
    alert("Passing the function as props from Parent to Child")
  }
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

            {/* Passing the function as props to Inputbox child component from App components */}
            <Route path='/Inputbox' element={<Inputbox data={passFunctionAsProps}/>}/>
            <Route path='ConstructorClass' element={<ConstructorClass/>}/>
            <Route path='RenderMethodClass' element={<RenderMethodClass name={name}/>}/>
            <Route path='ComponentDidMount' element={<ComponentDidMount/>}/>
            <Route path='ComponentDidUpdate' element={<ComponentDidUpdate/>}/>
            <Route path='ComponentShouldUpdate' element={<ComponentShouldUpdate/>}/>
            <Route path='ComponentWillUnmountParent' element={<ComponentWillUnmountParent/>}/>
            <Route path='UserEffectHook' element={<UserEffectHook/>}/>
            <Route path='UseEffectWithConditionOnState' element={<UseEffectWithConditionOnState/>}/>
            <Route path='UseEffectWithConditionForPropsParent' element={<UseEffectWithConditionForPropsParent/>}/>
            <Route path='ArrayListWithMap' element={<ArrayListWithMap/>}/>
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
