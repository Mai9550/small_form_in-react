import React from 'react';

class CreateNewUser extends React.Component {
  state = {
    FirstName: '',
    LastName: '',
    UserName:''
  };

  handleFirstName = event => {
    this.setState({ FirstName: event.target.value });
  };
  
  handleLastName = event => {
    this.setState({ LastName: event.target.value });
  };
  
  handleUserName = event => {
    this.setState({ UserName: event.target.value });
  };
  
  

  addItem = event => {
    event.preventDefault();
    this.props.onAddItem(this.state.value);
  };

  render() {
    return (
      <div>
            <label>First Name</label>
        <input class="w3-input" 
      type="text"
      value={this.state.FirstName}
      onChange={this.handleFirstName}/>
  
       <label>Last Name</label>

        <input class="w3-input" 
        type="text"
        value={this.state.LastName}
        onChange={this.handleLastName}/>

       <label>UserName</label>

        <input class="w3-input" 
        type="text"
        value={this.state.UserName}
        onChange={this.handleUserName}/>
      </div>
    );
  }
}



export default CreateNewUser;
