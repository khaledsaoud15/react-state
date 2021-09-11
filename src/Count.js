import React , { Component } from "react";



class Count extends Component {
    constructor() {
        super();
        this.state = { 
            count: 0,
         }
    };



    render() { 
        return (  
        <>
            <h1>{this.state.count}</h1>
            <button onClick={()=>this.setState({count: this.state.count  + 1})}>Increment</button>
            <button onClick={()=>this.setState({count: this.state.count - 1})}>Decrement</button>
            <button onClick={()=>this.setState({count: 0})}>Reset  </button>
            
           </>
        );
    }
}
 
export default Count;
