import React, { Component} from 'react'



class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg : ""
         }
    }


    handleChange = (e) => {
        this.setState({
            msg : e.target.value
        })
    }
    MessageHandler=()=>{
        this.props.sendMessage(this.state.msg)
    }
  

    render() { 
        return (
        <div className="container">
            <h1>{this.props.name}</h1>
            <form onSubmit={(e)=>{e.preventDefault(); this.MessageHandler();}}>
                <input 
                type="text"
                placeholder="Ecrire un message"
                onChange={this.handleChange}
                value={this.state.msg} />
                <input type="submit" value="Envoyer"  />
            </form>
            <h3>Message</h3>
            <h4>{this.props.message}</h4>   
        </div>
          );
    }
}
 
export default Card;