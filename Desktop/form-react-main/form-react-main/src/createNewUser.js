import React from 'react';

class CreateNewUser extends React.Component {
  state = {
  user: {
      firstName: '',
      lastName: '',
      username: '',
    },
  };

  handleFirstName = event => {
    this.setState({ firstName: event.target.value });
  };
  
  handleLastName = event => {
    this.setState({ lastName: event.target.value });
  };
  
  handleUserName = event => {
    this.setState({ username: event.target.value });
  };

  addUser = event => {
   
    this.props.onAdding(this.state.user);
  };
 

  render() {
    return (
      <div>
            <label>First Name</label>
        <input class="w3-input" 
      type="text"
      value={this.state.user.firstName}
      onChange={this.handleFirstName}/>
  
       <label>Last Name</label>

        <input class="w3-input" 
        type="text"
        value={this.state.user.lastName}
        onChange={this.handleLastName}/>

       <label>UserName</label>

        <input class="w3-input" 
        type="text"
        value={this.state.user.username}
        onChange={this.handleUserName}/>

<button class="w3-btn w3-blue-grey" onClick={this.addUser} >Register</button>

         <button class="w3-btn w3-blue-grey">Cancel</button>
      </div>
    );
  }
}



export default CreateNewUser;
