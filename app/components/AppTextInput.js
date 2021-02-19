import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { MaterialIcons, Entypo } from '@expo/vector-icons';



import AppTextTwo from './AppTextTwo'
import colors from '../config/colors'

const AppTextInput = ({ IconName, ...otherProps}) => {
    return (
        <View>
            <MaterialIcons name={IconName} size={24} color={colors.medium} style={styles.iconStyles} />
            <TextInput
                style={styles.input}
                {...otherProps}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: { 
        backgroundColor: colors.white100,
        borderRadius: 15,
        color: colors.darkBlue, 
        fontSize: 16,
        paddingBottom: 12, 
        paddingVertical: 8,
        paddingHorizontal: 45,
        marginVertical: 10,
        width: "100%",
    },
    iconStyles: {
       position: 'absolute',
       zIndex: 1,
       left: 10,
       top: 20
    }
})

export default AppTextInput
