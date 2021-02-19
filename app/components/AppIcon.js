import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import colors from '../config/colors'

const AppIcon = ({ onPress, icon, selected, }) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            style={[styles.roundSelector, { backgroundColor: selected ? colors.secondary : colors.white100 }]}>
            {selected && <MaterialIcons name={icon} size={20} color={colors.white100} />}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    roundSelector: {
        alignItems: 'center',
        backgroundColor: colors.secondary,
        borderRadius: 35/2,
        borderWidth: 0.8,
        borderColor: colors.secondary,
        height: 30,
        justifyContent: 'center',
        width: 30,
    },
})

export default AppIcon
