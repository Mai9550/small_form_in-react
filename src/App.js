import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateNewUser from './createNewUser'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  
  state = {
   users: [],
  };
  
  addUser=(user)=> {
  this.setState(prevState=>({users:[...prevState.users,user]}))
  }
  
  handleSubmit=(event)=> {  
    event.preventDefault();
  }
  
  addNames=(name)=>{
  this.setState(prevState=>({names:[...prevState.names,name]}))
  }
  
  render() {
    return ( 
      <form class="form-container"  onSubmit={this.handleSubmit}>
         <CreateNewUser/>
         <button class="w3-btn w3-blue-grey" onAdding={this.addUser} >Register</button>
         <button class="w3-btn w3-blue-grey">Cancel</button>
      </form>

    );
  }
}

export default App;
