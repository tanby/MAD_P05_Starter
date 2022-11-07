/*Example of Reac Native Life Cycle*/
import React, { Component } from 'react';
import { Text, Button ,View } from 'react-native';

class Content extends Component {
  
  //-- add the life cycle methods

  render() {
    // add the JSX below
    return (
      <View></View>
    );
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    // add the constructor code
  };

  // add the methods

  render() {
    //-- add JSX below
    return (
      <View>
      
      </View>
    );
  }
}
