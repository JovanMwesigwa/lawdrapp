import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, StatusBar, View, Keyboard, ScrollView, TouchableOpacity } from 'react-native'
import AppButton from '../components/AppButton'


import AppTextInput from '../components/AppTextInput'
import AppTextTwo from '../components/AppTextTwo'
import colors from '../config/colors'
import routes from '../navigation/routes'


const LoginScreen = ({navigation, setAuth}) => {
    return (
        <ScrollView style={styles.container} onPress={() => Keyboard.dismiss()}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.light300} />
            <View style={styles.upperContainer}>
                <AppTextTwo fontSize={32} fontWeight="700">Luwdr App</AppTextTwo>
                <AppTextTwo fontSize={14}>Laundry sucks, lets do it for you</AppTextTwo>
            </View>
            <View style={styles.inputsContainer}>
                <AppTextInput placeholder="Email or Phone" IconName="mail" />
                <AppTextInput placeholder="Password" IconName="lock" />  
                <View style={styles.btn}>
                    <AppButton title="Login"/>      
                </View>
                <View style={styles.options}>
                    <View style={{ paddingVertical: 8 }}>
                        <AppTextTwo color={colors.medium800} fontSize={16}>Forgot Password</AppTextTwo>
                    </View>
                    <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => navigation.navigate(routes.REGISTER)}>
                        <AppTextTwo color={colors.medium800} fontSize={16}>Need an Account?</AppTextTwo>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    btn: {
        marginVertical: 15
    },
    container: {
        flex: 1,
        marginHorizontal: 25
    },
    inputsContainer: {
        marginTop: 25
    },
    options: {
        alignItems: 'flex-end',
    },
    upperContainer: { 
        alignItems: 'center',
        flex: 1,
        marginVertical: 25,
        justifyContent: "center"
     }
})

export default LoginScreen
