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


  handleToggleEnd=()=> {
    this.setState({
      game: {
        ...this.state.game,
        numOfGames: 0
      }
    })
  }  

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
   
    let currUsers=this.props.users;
    let availability= currUsers.find(user=>user.username===this.state.user.username)
     if(availability){
     
 
  alert("user already exists")
     }else{
       
    this.props.onAdding(this.state.user);
    this.props.onShowing(this.state.game)
     }
  };

 
  handleSubmit=(event)=> {  
    event.preventDefault();
  
    
    

    
  
  } 
  
  

 
  handleToggleStart=()=> {
    
    
    this.setState({ToggleIn:true});
  }
 
  handleToggleAgain=()=> {
    
    
    this.setState({ToggleIn:false});
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

  
    } else if(ToggleIn){
  
      button =  <button class="w3-btn w3-blue-grey" onClick={()=>{
        this.handleToggleAgain();
        this.handleToggleEnd();
        
        }}  >Show number of games played</button>
    }

    return (
      <div>
         <form class="form-container"  onSubmit={this.handleSubmit}>
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
        this.addUser(this.state.user.username);
        this.showGames();

      }} >Register</button>

        {button}
        </form>
      </div>

      
    );
    
   
  }

}

export default CreateNewUser;
