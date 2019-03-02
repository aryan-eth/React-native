import React, {Component} from 'react'
import {StyleSheet, Text, View,Button} from 'react-native';
  import {createStackNavigator, 
    createAppContainer} from 'react-navigation';

//   import LoginScreen from './screens/LoginScreen.js';
// import HomeScreen from './screens/HomeScreen.js';
// import First from './First';

class First extends React.Component{
  render(){
    return(
      <View>
        <Text>Open the app</Text>
        <Button title="Go to Second screen" onPress={()=>this.props.navigation.navigate('Second')}>
        </Button>
      </View>
    )
  }
}

class Second extends React.Component{
  render(){
    return(
      <View>
        <Text>Second screen</Text>
      </View>
    )
  }
}

  const AppStackNavigator = createStackNavigator({
    First:{
      screen: First
    },
    Second:{
      screen:Second
    }
  });



  const App = createAppContainer(AppStackNavigator);
  export default App;
// export default createAppContainer(AppNavigator);