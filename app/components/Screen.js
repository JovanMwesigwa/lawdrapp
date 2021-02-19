import React from 'react'
import { StyleSheet, View, StatusBar, } from 'react-native'
import Constants from 'expo-constants';
import colors from '../config/colors';





const Screen = ({children, style}) => {

    return (
        <>
            <StatusBar barStyle="default-content" backgroundColor={colors.light300} />
        <View style={styles.container}>
            {children}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light100,
        flex: 1,
        marginTop: Constants.statusBarHeight, 
    }
})

export default Screen


