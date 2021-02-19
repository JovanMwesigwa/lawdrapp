import React from 'react'
import { StyleSheet,   View } from 'react-native'



import Header from '../components/Header'
import DeliveryCard from '../components/DeliveryCard';
import AppButton from '../components/AppButton';
import colors from '../config/colors';


const DeliveryDetailsScreen = ({navigation}) => {
    return (
        <>
            <Header title="Delivery Details" secondary back onPress={() => navigation.goBack()} />
            <View style={styles.container}>
                <DeliveryCard />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Next" backgroundColor={colors.secondary} onPress={() => console.log("Go to payments")}/>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 15
    },
    buttonContainer: {
        paddingHorizontal: 15,
        paddingVertical: 15
    }
})

export default DeliveryDetailsScreen
