import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { MyButton, MyText } from './components/DefaultComponent'
import { connect } from 'react-redux';
import { updateUser } from './redux/actions'
import Lib from './lib/util'

const mapStateToProps = (state) => {
    return (
        {
            loginReducer: state.loginReducer
        }
    )
};

const mapDispatchToProps = {
    updateUser
};


export class EditProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            telephone: this.props.loginReducer.data.telephone,
            email: this.props.loginReducer.data.email,
            username: this.props.loginReducer.data.username
        }
    }

    submit = () => {
        let data = {
            telephone: this.state.telephone,
            email: this.state.email,
            username: this.props.loginReducer.data.username
        }
        this.props.updateUser(data);

    }

    componentWillReceiveProps(nextProps) {
        if (this.props.loginReducer !== nextProps.loginReducer) {
            this.props.navigation.pop();
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222' }}>
                <MyText style={{ fontWeight: 'bold', fontSize: 18 }}>{`Username : ${this.state.username}`}</MyText>
                <View style={{ height: Lib.point(10) }} />
                <TextInput
                    onChangeText={(text) => this.setState({ telephone: text })}
                    style={styles.textInput} value={this.state.telephone}></TextInput>
                <View style={{ height: Lib.point(10) }} />
                <TextInput
                    onChangeText={(text) => this.setState({ email: text })}
                    style={styles.textInput} value={this.state.email}></TextInput>
                <View style={{ height: Lib.point(10) }} />
                <View style={{ flexDirection: 'row' }}>
                    <MyButton style={{ marginRight: Lib.point(10) }} onPress={() => this.props.navigation.pop()}>
                        <MyText>Go back</MyText>
                    </MyButton>
                    <MyButton onPress={() => this.submit()}>
                        <MyText>Submit</MyText>
                    </MyButton>
                </View>
            </View>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);

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
