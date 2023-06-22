import {Text, View,Button,Alert} from 'react-native';

type AppHeaderProps = {
  title : string;
  year? : number;
}
function AppHeader({title,year}:AppHeaderProps) {

const btnClick = () =>{
  Alert.alert('Welcome to Thailand','สวัสดีอันเลิศ');
}


  return (
    <View style={{marginTop : 24,}}>
      <Text style={{textAlign:'center'}}>App Header</Text>
      {/* if แบบ สั้นๆ */}
      {/* if แบบสั้นนะ */}
      <Button title="click me" onPress={btnClick}/>
      <Text>{title} - {year}</Text>
    </View>
  );

}
export default AppHeader;


