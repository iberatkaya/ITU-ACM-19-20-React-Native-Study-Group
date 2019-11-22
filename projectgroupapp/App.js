import React from 'react';
import 'react-native-gesture-handler';
import AppNav from './AppNav';
import Home from './screens/Home';


export default class App extends React.Component {

  render() {   //Ekranda görülecek her şey render'da gerçekleşir
    return (
      <AppNav/>
    );
  }
};

