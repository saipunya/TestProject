import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = () => {
  const navigation = useNavigation<any>();
  // ใช้ type เป็น any ไว้ก่อนนะ
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Icon name='home-account' size={40}/>
      <Text style={{marginBottom : 10,fontWeight:'bold',color:'red',fontSize : 20,}}>หน้าหลักของ App</Text>
      <Button title='เกี่ยวกับเรา' onPress={()=>{
        navigation.navigate('About');
        }}/>
    </View>
  )
}

export default HomeScreen