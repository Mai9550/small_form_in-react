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
  
  

  
  showNumOfGames=(game)=>{
  this.setState(prevState=>({users:[...prevState.users,game]}));
  }

 
 
  
  render() {
    
    return ( 
      <div>
     
         <CreateNewUser onAdding={this.addUser} onToggle={this.handleToggleEnd} onShowing={this.showNumOfGames} users={this.state.users} />
         

     
      <table>
  <tr>
    <th>Name</th>
    <th>UserName</th>
    
  </tr>
  
 <tr> 
<td>
{this.state.users.map((item, index) => <tr key={index}>{item.firstName}{item.lastName}</tr>
  )}

</td>



<td>
{this.state.users.map((item, index) => <tr key={index}>{item.username}</tr>)}

</td>
num of games:
<td>

{this.state.users.map((item, index) => <tr key={index}>{item.numOfGames}</tr>)}
</td>
</tr>
  
</table>

</div>
    );

  }
}

export default App;
