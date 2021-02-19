import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'


import colors from '../config/colors'

const AppText = ({ center,  children, heading, whiteText, ...otherProps}) => {
    return <Text style={[styles.text,{  color: whiteText ? colors.white100:  colors.darkBlue, textAlign: center &&'center', fontWeight: heading && "700", fontSize: heading ? 25 : 16 }]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        letterSpacing: 0.2,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenier'
    }
})

export default AppText

