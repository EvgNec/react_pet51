import React, {Component} from "react";
import authContext from "./AuthContext";

export class AuthProvider extends Component {
state ={
    user: null,
    logIn: ()=>{
        this.setState({user: 'Test'})
    },
    logOut: ()=>{
        this.setState({user: null})
    },
}


  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.props.children}
      </authContext.Provider>
    )
  }
}

export default AuthProvider
