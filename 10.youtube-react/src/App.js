import React, { Component } from 'react';
import './App.css';
import SubmitForm from './components/SubmitForm';
import Video from './components/Video';

class App extends Component {
  state = {
    videoItems: [],
  }

  getInput = (input) =>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw&nex`).
    then(res => res.json({success: true})).
    then(data => {
      console.log(data);
      this.setState({
        videoItems: data.items,
      });
    })
  }

  render() {
    return (
      <div className="App container">
        <div className="d-flex justify-content-center my-3">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgc68hab8-SgO-jT8nhCjoDGT-Zlhw30HmqVdrQydXMo9havAP" alt="12"/>
        </div>
        <SubmitForm getInput={this.getInput} />
        <Video videoItems={this.state.videoItems} />
      </div>
    );
  }
}

export default App;
