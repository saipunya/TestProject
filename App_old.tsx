/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Image, ScrollView, Text, View,StyleSheet} from 'react-native';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

function App() {
  let title = 'react-native';
  let isShowing = true;
  let age = 10;
  const styles = StyleSheet.create({
    container :{
      flex : 1,
      flexDirection : 'column',
      padding : 20,
    }
  })
  return (
    <ScrollView>
      <View
        style={styles.container}>
        <AppHeader title="ไม่ต้องเสียใจ" year={2023} />
        <Text style={{fontSize: 24, color: 'red'}}> hello world {title}</Text>
        <Text>
          {age}
          {isShowing && ' Notest '}
        </Text>
        <AppFooter />
        <Image
          source={{
            uri: 'https://chaiyaphum.web.cpd.go.th/images/person2566/2sumet.jpg',
          }}
          style={{width: 200, height: 350,borderRadius:5}}
        />
        <Text style={{fontSize:24,fontWeight:'bold',color:'red'}}>สุดยอดแห่งความหล่อ</Text>
        <Text style={{fontSize:50,}}>นายสุเมธ ชูรัตน์</Text>
      </View>
      </ScrollView>
  );

}

export default App;
