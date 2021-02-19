import React from 'react'
import { StyleSheet,  View } from 'react-native'




import AppTextTwo from './AppTextTwo'
import colors from '../config/colors'


const OrderDetailsCard = ({ item }) => {
    return (
        <View style={styles.orderStyles}>
            <View style={styles.orderInfo}>
                <AppTextTwo fontWeight="700">{item.number}</AppTextTwo>
                <AppTextTwo color={colors.pink600} fontSize={16}>{item.type}</AppTextTwo>
            </View>
            <View style={styles.detailStyles}>
                <AppTextTwo fontSize={15}>Date & Time</AppTextTwo>
                <AppTextTwo fontSize={15}>{item.date_and_time}</AppTextTwo>
            </View>
            <View style={styles.detailStyles}>
                <AppTextTwo fontSize={15}>Status</AppTextTwo>
                <AppTextTwo fontSize={15} color={ item.status === 'Pending' ? colors.yellow600 : colors.pink600}>{item.status}</AppTextTwo>
            </View>
            <View style={styles.detailStyles}>
                <AppTextTwo fontSize={15}>Pickup</AppTextTwo>
                <AppTextTwo fontSize={15}>{item.pickup}</AppTextTwo>
            </View>
            <View style={styles.detailStyles}>
                <AppTextTwo fontSize={15}>Address</AppTextTwo>
                <AppTextTwo fontSize={15}>{item.address}</AppTextTwo>
            </View>
            <View style={styles.detailStyles}>
                <AppTextTwo fontSize={15}>Delivery</AppTextTwo>
                <AppTextTwo fontSize={15}>{item.delivery}</AppTextTwo>
            </View>
            <View style={styles.detailStyles}>
                <AppTextTwo fontSize={15}>Delivery Address</AppTextTwo>
                <AppTextTwo fontSize={15}>{item.delivery_address}</AppTextTwo>
            </View>
            <View style={[styles.detailStyles, { paddingBottom: 20, borderBottomWidth: 0.5, borderBottomColor: colors.darkBlue }]}>
                <AppTextTwo fontSize={15}>Sub Total</AppTextTwo>
                <AppTextTwo fontSize={15} fontWeight="600">$ {item.sub_total}</AppTextTwo>
            </View>
            <View style={[styles.detailStyles, { paddingTop: 20 }]}>
                <AppTextTwo fontSize={15}>Delivery</AppTextTwo>
                <AppTextTwo fontSize={15} >$ {item.delivery_cost}</AppTextTwo>
            </View>
            <View style={styles.detailStyles}>
                <AppTextTwo fontSize={15} fontWeight="700">Total</AppTextTwo>
                <AppTextTwo fontSize={18} fontWeight="700" color={colors.pink600}>$ {item.total}</AppTextTwo>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailStyles: {
        flexDirection: 'row',
        paddingVertical: 5,
        justifyContent: 'space-between'
    },
    orderInfo: {
        paddingVertical: 5
    },
    orderStyles: {
        backgroundColor: colors.white100,
        borderRadius: 15,   
        padding: 12,
        width: "100%",
        marginVertical: 12
    }
})

export default OrderDetailsCard
