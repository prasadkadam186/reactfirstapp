
// Class based components Via seperate file
import { Component } from "react";

export default class Student extends Component{
    constructor()
    {
        super();
        this.Student={
            name : 'Samarth',
            age : '25',
            address : 'Pune'
        }
    }
    render()
    {
        return(
            <div>
                 <h1>Hey! Its Student Class based components</h1>
                 <div>{this.Student.name}</div>
            </div>
        );
    }
}