import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Exchanges extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            base: this.props.navigation.getParam('base'),
            rate: this.props.navigation.getParam('rate')
        };
    }
    
    static navigationOptions = ({ navigation }) => (
        {
            title: 'Exchange',
            headerStyle: {
                elevation: 1,
                backgroundColor: 'rgb(0, 200, 0)',
            },
            headerTintColor: '#fff'
        }
    );

    render() {
        return (
            <View>
                <Text style={{fontSize: 24}}>{this.state.base}: {this.state.rate} </Text>
            </View>
        )
    }
}
