import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const AppCard = ({item}) => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/machine2.png')} 
                style={{ width: 85, height: 85 }}
            />
            <AppText >{item.title}</AppText>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white100,
        borderRadius: 15,
        height: 140,
        justifyContent: 'center',
        width: 140,
        margin: 15
    }
})

export default AppCard
