import React, { Component } from 'react';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import store from './src/redux/configureStore'
import Login from './src/Login';
import Home from './src/Home';
import Register from './src/Register'

// import Login from './src/screens/Login';



console.disableYellowBox = true;
const ScreenStackNavigator = createStackNavigator({
  Login: Login,
  Home:Home
},
  {
    headerMode: "none",
    initialRouteName: "Login",
  });

const AppStackNavigator = createStackNavigator({
  MainPage: ScreenStackNavigator,
  Register: Register
}, {
    mode: 'modal',
    headerMode: 'none',
  });


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppStackNavigator />
     </Provider>
    );
  }
}

export default App;
