import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MyButton, MyText } from './components/DefaultComponent'

export class Register extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}>
        <MyText> Register </MyText>
        <MyButton onPress={() => this.props.navigation.pop()}>
          <MyText>Go back</MyText>
        </MyButton>
      </View>
    )
  }
}


export default Register