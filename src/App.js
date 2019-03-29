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
      this.componentDidMount.bind(this);
    //pull from database and set state with new info
  }

  componentDidMount(){
    axios.get()
      .then( res => {
        this.setState({
          socialHeader: res.data.title,
          postImage: res.data.post_image,
          title: res.data.title,
          author: res.data.author,
          message: res.data.post
        }).catch(err=> { 
          console.log(err);
        })
      })
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
