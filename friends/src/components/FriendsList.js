import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import AddFriend from './addFriend'

class FriendsList extends React.Component {
    constructor(){
        super();
        this.state = {
            friends: []
    }
  
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
   
const token = window.localStorage.getItem('token')
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res);
        this.setState({
          friends:res.data})
         
      })
      
      .catch((err) => console.error(err.message));
  };

  render() {
    console.log(FriendsList);
    return (
      <div>
      <h2>Friends:</h2>
      <AddFriend getData={this.getData}/>
      {this.state.friends.map(friend => (<div className='friend' key ={friend.id}>
    My Friend <b>{friend.name}{' '}</b> is <b>{friend.age} {' '}</b>years old and can be reached at <b>{friend.email}{' '}</b>
          </div>))}    
      </div>
    );
  }
}

export default FriendsList;
