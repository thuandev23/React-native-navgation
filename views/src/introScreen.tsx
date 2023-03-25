import * as React from 'react';
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
    'https://cdn.dribbble.com/users/3281732/screenshots/11192830/media/7690704fa8f0566d572a085637dd1eee.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13130602/media/592ccac0a949b39f058a297fd1faa38e.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/9165292/media/ccbfbce040e1941972dbc6a378c35e98.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/11205211/media/44c854b0a6e381340fbefe276e03e8e4.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/7003560/media/48d5ac3503d204751a2890ba82cc42ad.jpg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/6727912/samji_illustrator.jpeg?compress=1&resize=1200x1200',
    'https://cdn.dribbble.com/users/3281732/screenshots/13661330/media/1d9d3cd01504fa3f5ae5016e5ec3a313.jpg?compress=1&resize=1200x1200'

];
// Băng chuyền hoạt hình đẹp mắt trong React Native bằng cách sử dụng FlatList và Animated API
const imageW = width * 0.7;
const imageH = imageW * 1.54;


const IntroScreen = ({navigation}:{navigation:any}) => {
  const scrollX = React.useRef<any>(new Animated.Value(0)).current;
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
        <StatusBar hidden />
        <View 
          style = {StyleSheet.absoluteFillObject}
          >
            {data.map((image,index)=> {
              const inputRange = [ 
                (index-1) * width,
                 index * width,
                 (index+1)*width]
              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0, 1, 0]
              })
              return <Animated.Image 
                        key={'image - ${index}'}
                        source = {{uri:image}}
                        style = {[
                          StyleSheet.absoluteFillObject,
                          {
                            opacity
                          }
                        ]}
                        blurRadius={50}/>
                        
                      }
                    
            )}
        </View>
        <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent:{contentOffset:{x:scrollX}}}],
          {useNativeDriver:true}
        )}

        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled 
        renderItem = {({item}) => {
          return <View style = {{width, justifyContent:'center', alignItems:'center'}}>
            <Image source={{uri: item}} style = {{
              width:imageW,
              height:imageH,
              resizeMode:'cover',
              borderRadius:16
            }}/>
            </View>
        }}/>
        <View style = {{
          flex:1,
        }}>
          <TouchableOpacity style = {styles.btnLogin}
          onPress={() => { navigation.navigate('Login');}}>
              <Text style = {styles.textBtnLogin}>Login</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style = {styles.btnRegister}
           onPress={() => { navigation.navigate('Register');}}>
              <Text style = {styles.textBtnRegister}>Register</Text>
          </TouchableOpacity>
          </View>
    </View>
);
}
const styles = StyleSheet.create({
  btnLogin:{
    position:'absolute',
    margin:30,
    width:150,
    height:60,
    backgroundColor:'#2345',
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    marginLeft:47,
  },
  textBtnLogin:{
    justifyContent:'center',
    alignItems:'center',
    color:'#ffffff',
    fontSize:27,
    fontWeight:'bold',
    left: 35,
    top:10
  },
  btnRegister:{
    position:'absolute',
    margin:30,
    width:150,
    height:60,
    backgroundColor:'#2345',
    borderBottomRightRadius:20,
    borderTopRightRadius:20,
    marginLeft:197,
  },
  textBtnRegister:{
    justifyContent:'center',
    alignItems:'center',
    color:'#ffffff',
    fontSize:27,
    fontWeight:'bold',
    left: 20,
    top:10
  }
})
export default IntroScreen