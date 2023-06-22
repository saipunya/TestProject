import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const HomeStack = createNativeStackNavigator();
const AboutStack = createNativeStackNavigator();
// stack คือ กรุ๊ปของ components
const App = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{
        headerStyle: { backgroundColor:'purple'},
        headerTintColor: 'white',
        headerTitleStyle :{
          fontWeight : 'bold',
        },
        headerTitleAlign: 'center',

      }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{title:'หน้าหลัก'}}/>
        <AboutStack.Screen name="About" component={AboutScreen} options={{title:'เกี่ยวกับเรา'}}/>
      </HomeStack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({

})