import { View, Text,StyleSheet, KeyboardAvoidingView, Platform,Button,Alert , TouchableWithoutFeedback, Keyboard,TextInput,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient';


import {isValidateEmail, isValidatePassword} from './validation'
const LoginScreen = ({navigation}:{navigation:any}) => {
  // textinput
  const [text, setText] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const onChangeText = (newText:any) => {
    setText(newText);
  };
  //hide password
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  //states for validating - kiểm tra đăng nhập
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // states to sotre email/password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return  (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' :'height'}
      style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.inner}>

          {/* header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Login</Text>
          </View>

          {/* login */}
          <View style={styles.loginText}>
              <Text style={styles.dangnhapText}>Email</Text>
              <View style={styles.dangnhapStyle}>

              <TextInput style={styles.dangnhapInputBox}
                placeholder = "example@gmail.com"
                onChange={onChangeText}
                onChangeText = {(text) => {
                  setErrorEmail(isValidateEmail(text) == true ? '' : 'Email is not incorrect format !')
                  setEmail(text)
                }}
                value = {text}
              />
                <Text style = {{color:'red', fontSize: 15}}>{errorEmail}</Text>
              </View>

              <Text style={styles.passwordText}>Password</Text>
                <View style={styles.passwordStyle}>

                  <TextInput style={styles.passwordInputBox} 
                  onChangeText = {(text) => {
                    setErrorPassword(isValidatePassword(text) == true ? '' : 'Password be at least 6 characters !')
                    setPassword(text)
                  }}
                  placeholder="Vui lòng nhập password"
                  // hide password
                  secureTextEntry={!isPasswordVisible}
                  />
                
                {/* button hide / show password */}
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Text style={{marginLeft: 5}}>{isPasswordVisible ? 'Hide' : 'Show'}</Text>
                </TouchableOpacity>
                </View>
                <Text style = {{color:'red', fontSize: 15,marginLeft:21}}>{errorPassword}</Text>
            </View>


              <LinearGradient colors={['#65D6F1', '#3F48C8']} style={styles.gradientButton}>
                <TouchableOpacity
                onPress={() => { navigation.navigate('Main');}}
               
                >
                  <Text style={styles.btnLoginText}>Login</Text>
                </TouchableOpacity>
              </LinearGradient>



            {/* Sign in with Google, Facebook, other.. */}
            <Text style={{textAlign:'center', marginTop:30}}>with</Text>
          <View style={styles.loginwithother}>
            <View style={{marginRight:10}}>
              <TouchableOpacity style = {styles.loginwithFacebook}>

                <Text style={styles.textLoginwithFacebookGoogle}> Facebook</Text>
              </TouchableOpacity>

            </View>
            <View>
              <TouchableOpacity style = {styles.loginwithGoogle}>

              <Text style={styles.textLoginwithFacebookGoogle}> Google</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Or Rehister acc */}
          <View style={styles.register}>
            <TouchableOpacity 
           onPress={() => { navigation.navigate('Register');}}
            style = {{padding:5,backgroundColor:'#EDE3F7',borderRadius:5}}>
              <Text>  New user ? Register  </Text>
            </TouchableOpacity>
          </View>
        </View>

      </TouchableWithoutFeedback>

      </KeyboardAvoidingView>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#CACACA'
  },
  inner:{
    flex: 1,
    margin:25,
    backgroundColor: '#ffffff',
    borderRadius:15
  },
  header: {
    padding:70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize:40,
    fontWeight: 'bold',
    color: 'black',
  },
  
  loginText:{},
    dangnhapText:{
    marginLeft: 20,
    fontSize:20,
  },
  dangnhapStyle:{
    marginLeft: 20,
    marginTop: 10,
  },
  dangnhapInputBox:{
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  passwordText:{
    marginLeft: 20,
    fontSize:20,
  },
  passwordStyle:{
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  passwordInputBox:{
    height: 40,
    width: 250,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  // btn loginButton

  gradientButton:{
    marginTop: 60,
    marginLeft:50,
    padding:10,
    width: 250,
    alignItems: 'center',
    borderRadius:15
  },
  btnLoginText:{

    fontSize:23,
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  loginwithother:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:15,
  },
  loginwithFacebook:{
    backgroundColor: '#3b5998',
    padding: 10,
    borderRadius: 5
  },
  textLoginwithFacebookGoogle:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  },
  loginwithGoogle:{
    backgroundColor: '#db4a39',
    padding: 10,
    borderRadius: 5
  },
  register:{
    flex:4,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 20,
  },
})
export default LoginScreen