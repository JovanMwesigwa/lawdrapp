import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';


import AppText from './AppText'
import colors from '../config/colors'
import CircelProfilePic from './CircelProfilePic';



const Header = ({ title="Headering 1", subTitle, secondary, back, onPress, home }) => {
    return (
        <View style={[styles.container, {height: secondary ? 65: 130,flexDirection:  secondary ? 'row-reverse' :  'row'}]}>
            {/* <View> */}
                {/* {
                    home &&
                    <CircelProfilePic />
                } */}
                {secondary && <View></View>}
                <View style={styles.textContainer}>
                    <AppText heading>{title}</AppText>
                    {subTitle && <AppText>{subTitle}</AppText>}
                </View>
            {/* </View> */}
            {
            back && 
                <TouchableOpacity onPress={onPress}>
                    <MaterialIcons name={secondary ? "arrow-back": "settings" } size={24} color={colors.darkBlue} />                
                </TouchableOpacity>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#fff",
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        width: "100%",
    },
    textContainer: {
        
    }
})
export default Header
