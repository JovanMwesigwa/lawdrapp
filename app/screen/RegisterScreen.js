import React from 'react'
import { StyleSheet, StatusBar, View, ScrollView, TouchableOpacity } from 'react-native'

import AppButton from '../components/AppButton'


import AppTextInput from '../components/AppTextInput'
import AppTextTwo from '../components/AppTextTwo'
import colors from '../config/colors'
import routes from '../navigation/routes'


const RegisterScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} onPress={() => Keyboard.dismiss()}>
            <StatusBar barStyle="dark-content" backgroundColor={colors.light300} />
            <View style={styles.upperContainer}>
                <AppTextTwo fontSize={32} fontWeight="700">Luwdr App</AppTextTwo>
                <AppTextTwo fontSize={14}>Laundry sucks, lets do it for you</AppTextTwo>
            </View>
            <View style={styles.inputsContainer}>
                <AppTextInput placeholder="Username" IconName="person" />
                <AppTextInput placeholder="Email or Phone" IconName="mail" />  
                <AppTextInput placeholder="Password" IconName="lock" />  
                <AppTextInput placeholder="Confirm Password" IconName="lock" />  
                <View style={styles.btn}>
                    <AppButton title="Register" />      
                </View>
                <View style={styles.options}>
                    <TouchableOpacity style={{ paddingVertical: 8 }} onPress={() => navigation.navigate(routes.LOGIN)}>
                        <AppTextTwo color={colors.medium800} fontSize={16}>Already has an account?</AppTextTwo>
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

export default RegisterScreen
