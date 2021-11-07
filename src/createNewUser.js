import React from 'react';
let button;
class CreateNewUser extends React.Component {
  state = {
  user: {
      firstName: '',
      lastName: '',
      username: '',
    },
    ToggleIn:false
  };


  

  handleFirstName = event => {
    
    this.setState({
      user: {
        ...this.state.user,
        firstName: event.target.value
      }
    })
  };
  
  handleLastName = event => {
    this.setState({
      user: {
        ...this.state.user,
        lastName: event.target.value
      }
    })
  };
  
  handleUserName = event => {
    this.setState({
      user: {
        ...this.state.user,
        username: event.target.value
      }
    })
  };

  addUser = event => {
   
    this.props.onAdding(this.state.user);
  };

 
  handleToggleStart=()=> {
    
    
    this.setState({ToggleIn:true});
  }
 

  handleToggleEnd=()=> {
    this.setState(prevState=>({ToggleIn:false}));
  }
 

  render() {

    const ToggleIn = this.state.ToggleIn;
    if (!ToggleIn) {
      button =   <button class="w3-btn w3-blue-grey" onClick={this.addUser}  onClick={()=>this.handleToggleStart()} >Register</button>
  
    } else {
  
      button = <LoginButton onClick={()=>this.handleToggleEnd()} />;
    }

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

        {button}

        
      </div>

      
    );
    
    function LoginButton(props) {
      return (
        <button class="w3-btn w3-blue-grey">Cancel</button>
      );
    }
  }
}



export default CreateNewUser;
