import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header, Left, Body, Right,Icon } from 'native-base';
import { MyText } from './components/DefaultComponent'

export class HomeBase extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                    </Left>
                    <Body>
                        <MyText style={{color:'#000'}}>HomeBase</MyText>
                    </Body>
                    <Right>
                    </Right>
                </Header>
            </Container>
        )
    }
}

export default HomeBase