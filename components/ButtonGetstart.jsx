import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { Colors} from '../constants/Colors'
import { hp } from '../helpers/common'
import Loading from './Loading'

const ButtonGetstart = ({
    buttonStyle,
    textStyle,
    title='',
    onpress = () => {},
    loading = false,
    hasShadow = true,
}) => {
    const shadow = {
        shadowColor : theme.colors.dark,
        shadowOffset : {width : 0, height : 10},
        shadowOpacity: 0.2,
        shadowRadius : 8,
        elevation : 4,
    }
    if(loading){
        return (
            <View style = {[styles.button,buttonStyle, {backgroundColor : 'white'}]}>
                <Loading/>
            </View>
        )
    }
  return (
    <Pressable onPress={onpress} style={[styles.button,buttonStyle,hasShadow && shadow]}>
        <Text style={[styles.text,textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default ButtonGetstart
const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.primary,
        height : hp(6.6),
        alignItems : 'center',
        justifyContent: 'center',
        borderCurve : 'continuous',
        borderRadius : theme.radius.xl

    },
    text : {
        fontSize : hp(2.5),
        color : "white",
        fontWeight: theme.fonts.bold
    }
})