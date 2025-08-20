// Prpos with class based components
import React from "react";
export class Subject extends React.Component{
    render()
    {
        return(
            <div>
                <h1 style={{backgroundColor:'red', margin:'1%'}}>Sub : {this.props.subjectName}</h1>
            </div>
        )
    }
}