import React, {Component} from "react";
import AuthContext from "./AuthContext";

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
      <AuthContext.Provider value={this.state}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider
