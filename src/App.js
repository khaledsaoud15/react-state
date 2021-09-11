import './App.css';
import { Component } from 'react';
import Card from './Card';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      message1 : "",
      message2 : ""
     }
  }

  render() { 
    return ( 
      
        <div className="App">
          <Card name="Ali" message={this.state.message2} sendMessage={msg=>this.setState({message1:msg})}></Card>
          <Card name="Mohamed" message={this.state.message1} sendMessage={msg=>this.setState({message2:msg})}></Card>
        </div>
      );
     ;
  }
}
 
export default App;