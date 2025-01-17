import { Alert, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import Backbutton from '../components/Backbutton'
import { hp, wp } from '../helpers/common'
import { Colors } from '../constants/Colors'
import { theme } from '../constants/theme'
import Input from '../components/Input'
import Zocial from '@expo/vector-icons/Zocial';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router'
import ButtonGetstart from '../components/ButtonGetstart'
import FontAwesome from '@expo/vector-icons/FontAwesome';
const SignUp = () => {
  const router = useRouter();
  const userRef = useRef("");
  const emailRef = useRef("");
  const passRef  = useRef("");
  const [loading , setloading ] = useState(false);
  const onSubmit = () => {
    // if(!userRef.current || !emailRef.current || !passRef.current){
    //   Alert.alert("Sign UP","Please fill all the fields")
    // }
        setloading(true)
        setTimeout(() => {
          setloading(false)
          router.push("Home");
        }, 1000);
        
  }
  return (
    <ScreenWrapper>
      <StatusBar />
      <View style={styles.container}>
        <Backbutton router={router} />
        <View>
          <Text style={styles.welcometext}>
            Let,
          </Text>
          <Text style={styles.welcometext}>
            Get Started
          </Text>
        </View>
        <View style={styles.form}>
          <Text style={{fontSize : hp(1.5), color : theme.colors.text}}>
            Plese fill the details to create an account
          </Text>
          <Input icon = { <FontAwesome name="user" size={24} color="black" />}
          placeholder = "Enter your Name"
          onChangeText={value=>{userRef.current = value}}
          />
          <Input icon = { <Zocial name="email" size={24} color="black" />}
          placeholder = "Enter your Email"
          onChangeText={value=>{emailRef.current = value}}
          />
          <Input icon = { <MaterialIcons name="password" size={24} color="black" />}
          placeholder = "Enter your Password"
          secureTextEntry
          onChangeText={value=>{passRef.current = value}}
          />
          <ButtonGetstart
          title='Sign Up'
          loading={loading}
          onpress={onSubmit}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>
          <Pressable onPress={() => router.navigate('LogIn')}>
            <Text  style={[styles.footerText ,{color : theme.colors.primaryDark,fontWeight : theme.fonts.semibold}]}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5)
  },
  welcometext: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text
  },
  form : {
    gap: 25,

  },
  forgotpass :  {
    textAlign : 'right' ,
    justifyContent: 'center',
    alignItems : 'center',
    fontSize : hp(1.6)
  },
  footer : {
    flexDirection : 'row',
    justifyContent : 'center',
    alignItems : 'center',
    gap : 5,
  },
  footerText : {
    textAlign : 'center',
    color : theme.colors.text,
    fontSize: hp(1.8)
  }

});