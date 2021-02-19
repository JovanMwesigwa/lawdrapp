import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'


import colors from '../config/colors'
import AppText from './AppText'

const AppButton = ({ title, backgroundColor = colors.yellow, onPress }) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor}]} onPress={onPress}>
            <AppText whiteText >{title}</AppText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 15,
        alignItems: 'center',
        height: 45,
        justifyContent: 'center',
        width: "100%",
    },
    text: {
        fontSize: 16
    }
})

export default AppButton
