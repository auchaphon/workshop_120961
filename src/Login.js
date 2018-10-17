import React, { Component } from 'react';
import { View, Image, TextInput, KeyboardAvoidingView } from 'react-native';
import ImageLogin from '../assets/iconReact.png';
import { MyText, MyButton } from './components/DefaultComponent'
import Lib from './lib/util';
import { connect } from 'react-redux';
import { setLogin } from './redux/actions'

const mapStateToProps = (state) => {
    return (
        {
            loginReducer: state.loginReducer
        })
};

const mapDispatchToProps = {
    setLogin
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.username = "";
        this.password = "";
    }




    login = () => {
        let data = {
            username: this.username,
            password: this.password
        }
        this.props.setLogin(data);
        console.log(data);
        // this.props.navigation.push('Home');
        // this.props.navigation.navigate('Home')
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        if (nextProps.loginReducer.data.length != 0) {
            this.props.navigation.push('Home')
        }
    }

    register = () => {
        this.props.navigation.push('Register')
    }



    render() {
        return (
            <KeyboardAvoidingView style={{ flex: 1 }} enabled behavior={'padding'}>
                <View style={{
                    flex: 1,
                    backgroundColor: '#222', justifyContent: 'center', alignItems: 'center'
                }}>
                    <Image source={ImageLogin} style={{ height: Lib.point(200), width: Lib.point(200) }} />
                </View>
                <View style={{
                    flex: 1,
                    backgroundColor: '#222', justifyContent: 'center', alignItems: 'center'
                }}>
                    <TextInput
                        onChangeText={(text) => this.username = text}
                        style={styles.textInput}></TextInput>
                    <View style={{ height: 20 }} />
                    <TextInput secureTextEntry={true}
                        onChangeText={(text) => this.password = text}
                        style={styles.textInput}></TextInput>
                    <View style={{ height: 20 }} />
                    <MyButton onPress={this.login} style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: '80%', backgroundColor: 'greenyellow' }}>
                        <MyText style={{ color: '#000' }}>Sign In</MyText>
                    </MyButton>
                    <View style={{ height: 20 }} />
                    <MyButton onPress={this.register} style={{ justifyContent: 'center', alignItems: 'center', height: 40, width: '80%', backgroundColor: 'greenyellow' }}>
                        <MyText style={{ color: '#000' }}>Register</MyText>
                    </MyButton>
                </View>
                {/* <View style={{flex:1}}/> */}
            </KeyboardAvoidingView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


const styles = {
    textInput: {
        width: '80%', height: 50,
        backgroundColor: '#333',
        borderColor: 'lawngreen',
        borderWidth: 1,
        color: '#fff',
        padding: 4,
        borderRadius: 10

    }
}