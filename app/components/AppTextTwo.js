import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'


import colors from '../config/colors'

const AppTextTwo = ({children, ...style}) => {
    return <Text style={[styles.text,{...style}]}>{children}</Text>
}

const styles = StyleSheet.create({
    text: {
        color: colors.darkBlue,
        fontSize: 18,
        letterSpacing: 0.2,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenier'
    }
})

export default AppTextTwo

