import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'



import Header from '../components/Header'
import OrderDetailsCard from '../components/OrderDetailsCard'


const orderData = [
    {
        id: 1,
        number: "#ADHSHJA5",
        type: "WASH AND IRON",
        date_and_time: '11, Jan 2020, 10:30am',
        status: "Confirmed",
        pickup: '11, Jan 2020, 10:30am',
        address: '#250 Barker Street',
        delivery: '12, Jan 2020, 10:30am',
        delivery_address: '#250 Barker Street',
        sub_total: 24,
        delivery_cost: 1,
        total: 25
    },
    {
        id: 2,
        number: "#ERBVHSG09",
        type: "IRON ONLY",
        date_and_time: '15, Jan 2020, 11:30am',
        status: "Pending",
        pickup: '15, Jan 2020, 11:30am',
        address: '#250 Barker Street',
        delivery: '16, Jan 2020, 11:30am',
        delivery_address: '#250 Barker Street',
        sub_total: 24,
        delivery_cost: 1,
        total: 25
    },
    {
        id: 3,
        number: "#ADHSHJA5",
        type: "WASH AND IRON",
        date_and_time: '20, Jan 2020, 12:00am',
        status: "Confirmed",
        pickup: '20, Jan 2020, 12:00am',
        address: '#45 Mukuru Rd',
        delivery: '22, Jan 2020, 12:00am',
        delivery_address: '#250 Barker Street',
        sub_total: 24,
        delivery_cost: 4,
        total: 28
    },
]


const OrdersScreen = () => {
    return (
        <>
            <Header title="My Orders" secondary />
                <FlatList
                    data={orderData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.orderCard}>
                            <OrderDetailsCard item={item} />
                        </View>
                    )}
                />
        </>
    )
}

const styles = StyleSheet.create({
    orderCard: {
        marginHorizontal: 12
    }
})

export default OrdersScreen
