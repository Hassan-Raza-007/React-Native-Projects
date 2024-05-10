import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Card from './components/Card';
import Styled_Components from './components/Styled_Components';

function App() {
  const pressHandle = ()=>{
    console.log("clicked..")
  }
  return (
    <View style={{flex: 1}}>
    {/* // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
      {/* <Image style={{resizeMode:'contain'}} source={require('./assets/Image.webp')}/>
      <Image resizeMode='cover' width={200} height={200} source={{url:'https://media.kasperskydaily.com/wp-content/uploads/sites/92/2019/12/09084248/android-device-identifiers-featured.jpg'}}/>
      <Text>Hello React Native!</Text>
      <TouchableOpacity onPress={pressHandle}>
        <Text>Click here</Text>
      </TouchableOpacity> */}

      {/* <Card/> */}

      <Styled_Components/>
    </View>
  );
}

export default App;
