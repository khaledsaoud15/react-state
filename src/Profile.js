import react,{ Component } from "react";
import './Profile.css'
import profile from './Profile.svg';

class Profile extends Component {
    constructor() {
        super();
        this.state = { 
            persone :{
            name :'khaled saoud',
            age :20,
            desc:'a fullStack developer'
        },
            show :false,
            count:0
            
         }
    }

    increment() {
      this.setState({
          count:this.state.count + 1
      }) 
      }
    
      componentDidMount() {
        this.interval = setInterval(() => this.increment(), 1000);
      }

   
  

showState = ()=>{this.setState({show:!this.state.show}) }


    render() { 
        return ( 
            <>
               <div className="body">
               <button onClick = { this.showState}>{this.state.show ? 'hide' : 'show'}</button> 

                <div className="container">
                <p>{this.state.count}</p>

                {this.state.show ? <img src={profile} alt="" /> : null}
                <div className="name">
                {this.state.show ? <h1>{this.state.persone.name}</h1> : null}
                {this.state.show ?  <p>{this.state.persone.age}</p> : null}
                {this.state.show ?  <p>{this.state.persone.desc}</p> :null}
                </div>
                </div>
               </div>
                  
                 
            
            </>
         );
    }
}
 
export default Profile;