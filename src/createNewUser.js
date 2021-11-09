import React from 'react';
let button;
class CreateNewUser extends React.Component {
  state = {
  user: {
      firstName: '',
      lastName: '',
      username: '',
    },
    ToggleIn:false,
    game:{
      numOfGames:0
    },
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

  showGames = event => {
    
    

    this.props.onShowing(this.state.game)
    
  }

 
  handleToggleStart=()=> {
    
    
    this.setState({ToggleIn:true});
  }
 

  handleToggleEnd=()=> {
    this.setState(prevState=>({ToggleIn:false}));
  }
 handleNumOfGames=()=>{
  this.setState({
    game: {
      ...this.state.game,
      numOfGames: "*/"
    }
  })
 }

  render() {

    const ToggleIn = this.state.ToggleIn;
    
    if (!ToggleIn) {
      button =   <button class="w3-btn w3-blue-grey" onClick={() => {
        this.handleToggleStart();
        this.handleNumOfGames();
      }} >Hide number of games played</button>

  
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

<button class="w3-btn w3-blue-grey" onClick={() => {
        this.addUser();
        this.showGames();
      }} >Register</button>

        {button}
      </div>

      
    );
    
    function LoginButton(props) {
      return (
        <button class="w3-btn w3-blue-grey">Show number of games played</button>
      );
    }
  }
}



export default CreateNewUser;
