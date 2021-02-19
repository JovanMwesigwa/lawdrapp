import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';



import colors from '../config/colors'
import AppText from './AppText'
import AppTextTwo from './AppTextTwo';

const OrderCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <MaterialCommunityIcons name="washing-machine"  size={55} color={colors.pink600} />
            </View>
            <View style={styles.descriptionContainer}>
                <AppTextTwo fontSize={16} fontWeight="700">{item.title}</AppTextTwo>
                <View style={styles.innerText}>
                    <Text style={styles.priceText}>${item.price}</Text>
                    <Text style={styles.gender}>{item.gender}</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color={colors.darkBlue} />
                </View>
            </View>
            <View style={styles.pricesContainer}>

                <MaterialCommunityIcons name="minus"style={styles.roundedIcon}  size={24} color={colors.darkBlue} />
                <View style={{ marginTop: 5 }}>
                    <AppText> 0 </AppText>
                </View>
                <MaterialCommunityIcons name="plus" style={styles.roundedIcon} size={24} color={colors.darkBlue} />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: colors.white100,
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
        width: "100%",
        
    },
    descriptionContainer: {
        flex: 2
    },
    gender: {
        color: colors.darkBlue,
    },
    iconContainer: {
        paddingHorizontal: 12
    },
    innerText: {
        alignItems: 'center',
        flexDirection: 'row',
        
    },
    priceText: { 
        color: colors.pink600, 
        marginRight: 8, 
        fontWeight: '700' 
    },
    pricesContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    roundedIcon: {
        padding: 5,
        backgroundColor: colors.light100,
        borderRadius: 65,
        marginHorizontal: 3
    }
})

export default OrderCard
