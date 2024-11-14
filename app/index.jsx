import { View, Text, Button, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import ScreenWrapper from '../components/ScreenWrapper';
import { theme } from '../constants/theme';
import { hp, wp } from '../helpers/common';

const index = () => {
  router = useRouter();
  setTimeout(() => {
    router.push('welcome')
  }, 200);
  return (
    <ScreenWrapper bg={theme.colors.bluef}>
      <Image style={styles.welcomeImg} resizeMode='contain' source={require('../assets/images/logo-ctu.png')} />
      {/* <Button title='Welcome' onPress={() => router.push('welcome')} /> */}
    </ScreenWrapper>
  )
}

export default index
const styles = StyleSheet.create({
  welcomeImg: {
    height: hp(70),
    width: wp(70),
    alignSelf: 'center'
  }
})