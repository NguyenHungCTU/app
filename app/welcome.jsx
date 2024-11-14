import { View, Text, StyleSheet, Image, Button, Pressable } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/common'
import { theme } from '../constants/theme'
import { Colors} from '../constants/Colors'
import ButtonGetstart from '../components/ButtonGetstart'
import { useRouter } from 'expo-router'
const welcome = () => {
    const router = useRouter();
    const [loading,setloading] = useState(false);
    const welcome = () => {
        setloading(true)
        setTimeout(() => {
            setloading(false)
            router.push('SignUp');
        }, 1000);
        
    }
  return (
    <ScreenWrapper bg='while'>
        <StatusBar style='dark'/>
        <View style={styles.container}>
            <Image style={styles.welcomeImg} resizeMode='contain' source={require('../assets/images/logo-ctu.png')}/>
        </View>
        <View style={{gap:20,flex : 1}}>
            <Text style={styles.titleSignUp}>WELCOME</Text>
            <Text style={styles.bodySignUp}>MRC app</Text>
        </View>
        <View style={{flex:1,}}>
            <ButtonGetstart 
                loading = {loading}
                title = 'Getting Start' 
                onpress={welcome}
                buttonStyle = {{marginHorizontal: wp(3)}}

                />
        </View>
        <View style = {styles.bottomcontainer}>
            <Text style={styles.logintext}>
                Already have an account!
            </Text>
            <Pressable onPress={() => router.push('LogIn')}>
                <Text style={[styles.logintext, {color: theme.colors.primaryDark,fontWeight :theme.fonts.semibold}]}>
                    Login
                </Text>
            </Pressable>
        </View>
    </ScreenWrapper>
  )
}

export default welcome
const styles = StyleSheet.create({
    container : {
        // flex:1,
        alignItems : 'center',
        justifyContent: 'space-around',
        marginHorizontal: wp(4)
    },
    welcomeImg : {
        height:hp(40),
        width : wp(40),
        alignSelf:'center'
    },
    titleSignUp: {
        color:Colors.light.text,
        fontSize: hp(4),
        textAlign: 'center',
    },
    bodySignUp: {
        color:Colors.light.text,
        fontSize: hp(2),
        textAlign: 'center',
    },
    footer :{
        gap : 30,
        width : '100%',
    },
    bottomcontainer : {
        flex: 1,
        flexDirection : 'row',
        justifyContent :'center',
        alignItems : 'center',
        gap: 5,
    },
    logintext: {
        textAlign: 'center',
        color : theme.colors.text,
        fontSize : hp(2)
    },

});