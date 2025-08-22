// Prpos with class based components
import React from "react";
export class Subject extends React.Component{
    constructor()
    {
        super();
       this.state={
        status:false
       };
    }
    render()
    {
        return(
            <div>
                {/* Show and hide the data by state on click of below buttons */}
                <button onClick={()=>this.setState({status: !this.state.status})}>Toggle</button>
                <button onClick={()=>this.setState({status:true})} style={{backgroundColor:'green', margin:'1%'}}>Show</button>
                <button onClick={()=>this.setState({status:false})} style={{backgroundColor:'Blue', margin:'1%'}}>Hide</button>
                {
                    this.state.status ? 
                    (<div>
                        <h4>This is Subject class based component called </h4>
                        <h1 style={{backgroundColor:'red', margin:'1%'}}>Sub : {this.props.subjectName}</h1>
                    </div>) 
                    : null
                }
            </div>
        )
    }
}