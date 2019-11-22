import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './screens/Home';
import ExchangeScreen from './screens/Exchanges';

const Stack = createStackNavigator({
    Home: HomeScreen,
    Exchange: ExchangeScreen
});

const Drawer = createDrawerNavigator({Home: Stack},
    {
        /*contentComponent:(props) => (
            <View>
                <Text>hey</Text>
            </View>
        )*/
    }
    );



export default createAppContainer(Stack);