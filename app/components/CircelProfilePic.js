import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


import colors from '../config/colors'



const CircelProfilePic = () => {
    return (
        <View style={styles.profilePic}>

        </View>
    )
}

const styles = StyleSheet.create({
    profilePic: {
        width: 50,
        height: 50,
        backgroundColor: colors.pink600,
        borderRadius: 50/2,
        marginBottom: 8
    }
})

export default CircelProfilePic
