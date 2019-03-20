import React, { Component } from 'react';
import SocialCard from './views/SocialCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      socialHeader: '',
      postImage: '',
      title: '',
      author: '',
      message: ''
    }
  }
  render() {
    const {socialHeader,
    postImage,
    title,
    author,
    message} = this.state;
    return (
      <div className="App">
        <SocialCard socialHeader = {socialHeader}
      postImage = {postImage}
      title = {title}
      author = {author}
      message = {message}/>
      </div>
    );
  }
}

export default App;
