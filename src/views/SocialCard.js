import React, { Component } from 'react';

export default class SocialCard extends Component{
  
//display info from database

  render(props){

    return(
        <div>
            {this.props.socialHeader}
            Social Card
        </div>
    )
  }
}