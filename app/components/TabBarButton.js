import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  AntDesign,  } from '@expo/vector-icons';


import colors from '../config/colors';


const TabBarButton = () => {
    return (
        <View style={styles.container}>
            <AntDesign name="plus" size={28} color={colors.white100} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: colors.yellow,
        borderRadius: 55/2,
        borderWidth: 5,
        borderColor: colors.white100,
        elevation: 6,
        height: 55,
        justifyContent: 'center',
        marginBottom: 30,
        width: 55,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
    },
    icon: {

    }
})

export default TabBarButton
