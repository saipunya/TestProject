import { View, Text,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AboutScreen = () => {
  const navigation = useNavigation<any>();
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Welcome to AboutScreen</Text>
      <Button title="ย้อนกลับ" onPress={()=>{
          navigation.goBack();
          // ย้อนกลับหน้าที่ผ่านมาใช้ goBack หรือ natigate('Home') ก็ได้นะ
      }}/>
    </View>
  )
}

export default AboutScreen