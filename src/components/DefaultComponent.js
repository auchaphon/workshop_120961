import React, { Component } from 'react'
import { Text, View,TouchableOpacity } from 'react-native'

export class MyText extends Component {
    render() {
        return (
            <Text {...this.props} style={[styles.text, this.props.style]}>
                {this.props.children} </Text>
        );
    }
}

export class MyButton extends Component {
    render() {
        return (
            <TouchableOpacity
                {...this.props}
                style={[styles.button, this.props.style]}>
                {this.props.children}
            </ TouchableOpacity>
        )
    }
}

const styles = {
    text: {
        color: 'lawngreen',
        fontSize: 16,
    },
    button: {
        padding: 10,
        backgroundColor: 'transparent',
        borderColor: 'lawngreen',
        borderWidth: 2,
        borderRadius: 6,
    },
}
