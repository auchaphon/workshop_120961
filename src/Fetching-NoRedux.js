import React, { Component } from 'react'
import { Text, View, ActivityIndicator, FlatList, Image, RefreshControl } from 'react-native'
import { fetchData } from './redux/actions/apiFetching'
import Lib from '../src/lib/util'
import { MyText, MyButton } from '../src/components/DefaultComponent'

export class Fetching extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
            isError: false,
            data: []
        }
    }

    componentWillMount() {
        this.setState({
            isFetching: true,
            data: []
        })
        fetchData().then((result) => {
            this.setState((oldstate) => {
                return {
                    isFetching: false,
                    data: result
                }
            });
        });
    }

    componentDidMount(){

    }


    componentDidUpdate(){

    }

    componentWillUnmount(){
        
    }

    _renderItem = ({ item, index }) => {
        const { owner, full_name, html_url } = item;
        return <View style={{ marginVertical: Lib.point(5), height: Lib.point(80), backgroundColor: '#fff', borderColor: '#ababab', borderWidth: 0.5 }}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: owner.avatar_url }} style={{ height: Lib.point(80), width: Lib.point(80) }} resizeMode={'contain'} />
                <View style={{ flexDirection: 'column', flex: 1, paddingHorizontal: Lib.point(10) }}>
                    <MyText numberOfLines={2} style={{ fontSize: Lib.font(20), color: "#04f" }}>{full_name}</MyText>
                    <MyButton style={{ borderColor: '#333', width: Lib.point(150), padding: Lib.point(2), justifyContent: 'center', alignItems: 'center' }}>
                        <MyText style={{ fontSize: Lib.font(14), color: '#333' }}>{'go to repository'}</MyText>
                    </MyButton>
                </View>
            </View>
        </View>
    }

    refresh() {
        /// put your refresh logic here
        this.setState({
            isFetching: true,
            data: []
        })
        fetchData().then((result) => {
            this.setState((oldstate) => {
                return {
                    isFetching: false,
                    data: result
                }
            });
        });
    }

    render() {
        return (
            <View style={{ flex: 1, padding: Lib.point(20), backgroundColor: '#333' }}>
                {
                    (this.state.isFetching) ?
                        <View style={{ alignItems: 'center' }}><MyText> Loading...<ActivityIndicator color={'lawngreen'} /> </MyText></View>
                        : <FlatList data={this.state.data}
                            renderItem={this._renderItem}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refreshing}
                                    onRefresh={() => this.refresh()}
                                />
                            }
                        />

                }
            </View>
        )
    }
}

export default Fetching