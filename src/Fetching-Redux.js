import React, { Component,PureComponent } from 'react'
import { Text, View, ActivityIndicator, FlatList, Image, RefreshControl } from 'react-native'
import Lib from '../src/lib/util'
import { getFetchData } from './redux/actions/index'
import { MyText, MyButton } from '../src/components/DefaultComponent'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return (
    {
      fetchReducer: state.fetchReducer
    }
  )
};

const mapDispatchToProps = {
  getFetchData
};

class Fetching extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRefreshing: false
    }
  }

  componentWillMount() {
    this.props.getFetchData();
  }


  _renderItem = ({ item, index }) => {
    const { owner, full_name, html_url } = item;
    return <View style={{ marginVertical: Lib.point(5), height: Lib.point(80), backgroundColor: '#cbcbcb', borderColor: '#ababab', borderWidth: 0.5 }}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: owner.avatar_url }} style={{ height: Lib.point(80), width: Lib.point(80) }} resizeMode={'contain'} />
        <View style={{ flexDirection: 'column', flex: 1, paddingHorizontal: Lib.point(10) }}>
          <MyText numberOfLines={2} style={{ fontSize: Lib.font(20), color: "#04f" }}>{full_name}</MyText>
          <MyButton onPress={() => this.setState({isRefreshing:false})}  style={{ borderColor: '#333', width: Lib.point(150), padding: Lib.point(2), justifyContent: 'center', alignItems: 'center' }}>
            <MyText style={{ fontSize: Lib.font(14), color: '#333' }}>{'go to repository'}</MyText>
          </MyButton>
        </View>
      </View>
    </View>
  }

  refresh() {
    this.props.getFetchData();
  }

  render() {
    console.log('renderagain');
    const { fetchReducer } = this.props;
    return (
      <View style={{ flex: 1, padding: Lib.point(20), backgroundColor: '#333' }}>
        {
          (fetchReducer.isLoading) ?
            <View style={{ alignItems: 'center' }}><MyText> Loading...
              <ActivityIndicator color={'lawngreen'} /> </MyText></View>
            : <FlatList data={fetchReducer.data}
              renderItem={this._renderItem}
              refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={() => this.refresh()}
                />
              }
            />

        }
      </View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fetching);