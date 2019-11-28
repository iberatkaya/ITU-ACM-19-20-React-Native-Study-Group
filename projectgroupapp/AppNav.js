import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, Linking, Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from './screens/Home';
import ExchangeScreen from './screens/Exchanges';

const height = Dimensions.get("window").height;

const Stack = createStackNavigator({
    Home: HomeScreen,
    Exchange: ExchangeScreen
});

const Drawer = createDrawerNavigator({Home: Stack},
    {
        contentComponent:(props) => (
            <ScrollView>
                <View style={{ marginBottom: 4, height: height * 0.25, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}>
                </View>
                <TouchableOpacity
                    onPress={() => { Linking.openURL("mailto:ibraberatkaya@gmail.com?subject=Feedback"); }}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 14, paddingLeft: 32, color: 'black' }}>Feedback</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        )
    }
    );



export default createAppContainer(Drawer);