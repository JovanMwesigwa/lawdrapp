import React from 'react'
import { View, StyleSheet, ScrollView, Keyboard } from 'react-native'


import AppButton from '../components/AppButton'
import AppItemSelector from '../components/AppItemSelector'
import Header from '../components/Header'
import colors from '../config/colors'
import routes from '../navigation/routes'



const WashingPreferences = ({ navigation }) => {
    return (
        < >
            <Header title="Washing Preferences" secondary back  onPress={() => navigation.goBack()}/>
            <ScrollView onPress={() => Keyboard.dismiss()}>
            <AppItemSelector 
                title="Color Preferences" 
                firstTitle="Color Clothes" 
                secondTitle="White Clothes"
             />
            <AppItemSelector
                title="Washing Tempreture" 
                firstTitle="Celsius" 
                secondTitle="Fahrenheit"
            
            />

            <AppItemSelector
                title="Other" 
                firstTitle="Use Softener" 
                secondTitle="Use Scented Detergent"
                other
            />

            <AppItemSelector
                title="Additional notes" 
                notes
            />
            <View style={styles.buttonContainer}>
                <AppButton title="Next" backgroundColor={colors.secondary} onPress={() => navigation.navigate(routes.DELIVERYDETAILS)}/>
            </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }
})

export default WashingPreferences
