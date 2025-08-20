
// Class based components Via seperate file
import { Component } from "react";
import {Subject} from "./Subject"

export default class Student extends Component{
    // Purpose : Show the student data on click of show data button
    showData(){
        alert(this.Student.name)
    }
    constructor()
    {
        super();
        this.Student={
            name : 'Samarth',
            age : '25',
            address : 'Pune',
            subjectName : 'Marathi'
        }
    }
    render()
    {
        return(
            <div>
                 <h1>Hey! Its Student Class based components</h1>
                 <button onClick={()=>{this.showData()}}>Show Student Data</button>
                 <Subject subjectName={this.Student.subjectName}/>
            </div>
        );
    }
}