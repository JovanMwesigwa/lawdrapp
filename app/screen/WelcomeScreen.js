import React from 'react'
import { StyleSheet, StatusBar, View, ImageBackground } from 'react-native'


import AppButton from '../components/AppButton'
import AppTextTwo from '../components/AppTextTwo'
import colors from '../config/colors'
import routes from '../navigation/routes'



const WelcomeScreen = ({ navigation }) => {
    return (
        <>
            <StatusBar barStyle="default-content" backgroundColor={colors.light} />
            <ImageBackground source={require('../../assets/laundry.jpg')}
                style={styles.bgImage} resizeMode="cover"
            >   
                <View style={styles.container}>
                    <View >
                        <AppTextTwo fontSize={45} fontWeight="700" color={colors.darkBlue}>Luwdr App</AppTextTwo>
                        <View >
                            <AppTextTwo fontSize={16} color={colors.darkBlue} textAlign="center" >Laundry sucks, We get it. </AppTextTwo>
                            <AppTextTwo fontSize={16} color={colors.darkBlue} textAlign="center" >Let us do it for you.</AppTextTwo>
                        </View>
                    </View>
                    <View style={styles.buttonStyles}>
                        <AppButton title="GET STARTED" onPress={() => navigation.navigate(routes.LOGIN)} />
                    </View>
                </View>

            </ImageBackground>
        </>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        backgroundColor: 'black',
        bottom: 0,
        height: null,
        position: 'relative',
        right: 0,
        top: 0,
        left: 0,
        flex: 1, 
        width: null, 
        opacity: 0.9,
    },
    container : {
        alignSelf: 'center',
        position: 'absolute',
        top: 45,
        flex: 1,
        zIndex: 999
    },
    buttonStyles: {
        alignSelf: 'center',
        marginTop: 35,
        width: "60%",
        
    }
    
})

export default WelcomeScreen


