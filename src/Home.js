import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MyButton, MyText } from './components/DefaultComponent'
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return (
    {
      loginReducer: state.loginReducer
    }
  )
};

const mapDispatchToProps = {

};



class Home extends Component {
  render() {
    console.log(this.props);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}>
        {(!this.props.loginReducer.isLoading) 
        && !('length' in this.props.loginReducer.data) &&
          <View><MyText > Home </MyText>
            <MyText> {`Username ${this.props.loginReducer.data.data.username}`} </MyText>
            <MyText> {`Phone ${this.props.loginReducer.data.data.telephone}`} </MyText>
            <MyButton onPress={() => this.props.navigation.pop()}>
              <MyText>Go back</MyText>
            </MyButton></View>
        }
    
      </View>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);
