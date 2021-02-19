import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'; 


import AppIcon from './AppIcon'
import AppTextTwo from './AppTextTwo'
import colors from '../config/colors';

const DeliveryCard = () => {
    return (
        <>
            <View style={styles.cardContainer}>
                <View style={styles.titleContainer}>
                    <AppTextTwo fontSize={16} fontWeight="700">Pickup Address</AppTextTwo>
                    <AppIcon selected icon="check" />
                </View>
                <View style={styles.infoContainer}>
                    <View>
                        <AppTextTwo fontSize={14}>15 History Lane, Silver Springs</AppTextTwo>
                        <AppTextTwo fontSize={14}>10, Jan 2020, 10:30am</AppTextTwo>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.roundSelector, { backgroundColor: colors.white100 }]}>
                            <MaterialIcons name="edit" size={20} color={colors.pink600} />
                        </TouchableOpacity> 
                        <TouchableOpacity style={[styles.roundSelector, { marginLeft: 8 }]}>
                            <MaterialIcons name="delete" size={20} color={colors.pink600} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.titleContainer}>
                    <AppTextTwo fontSize={16} fontWeight="700">Delivery Address</AppTextTwo>
                    <AppIcon selected icon="check" />
                </View>
                <View style={styles.infoContainer}>
                    <View>
                        <AppTextTwo fontSize={14}>15 History Lane, Silver Springs</AppTextTwo>
                        <AppTextTwo fontSize={14}>256 minutes from now..</AppTextTwo>
                    </View>
                    <View style={styles.buttons}>
                        <TouchableOpacity style={[styles.roundSelector, { backgroundColor: colors.white100 }]}>
                            <MaterialIcons name="edit" size={20} color={colors.pink600} />
                        </TouchableOpacity> 
                        <TouchableOpacity style={[styles.roundSelector, { marginLeft: 8 }]}>
                            <MaterialIcons name="delete" size={20} color={colors.pink600} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        alignSelf: 'flex-end'
    },
    cardContainer: {
        backgroundColor: colors.white100,
        borderRadius: 15,
        width: "100%",
        padding: 15,
        margin: 15,

    },
    infoContainer: {
        flexDirection: 'row',
        paddingTop: 12,
        justifyContent: 'space-between'
    },
    roundSelector: {
        alignItems: 'center',
        height: 30,
        justifyContent: 'center',
        width: 30,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})

export default DeliveryCard
