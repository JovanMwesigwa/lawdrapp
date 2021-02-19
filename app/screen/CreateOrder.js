import React from 'react'
import { StyleSheet, View, FlatList} from 'react-native'



import Header from '../components/Header'
import OrderCard from '../components/OrderCard'
import AppButton from '../components/AppButton'
import colors from '../config/colors'
import routes from '../navigation/routes'


const orders = [
    {
        id: 1,
        title: "T-Shirt",
        price: 2,
        gender: "MEN"
    },
    {
        id: 2,
        title: "Outer-Wear",
        price: 2,
        gender: "MEN"
    },{
        id: 3,
        title: "Bottom",
        price: 2,
        gender: "MEN"
    },{
        id: 4,
        title: "Dresses",
        price: 2,
        gender: "WOMEN"
    },{
        id: 5,
        title: "Home",
        price: 2,
        gender: "HOUSE"
    },{
        id: 6,
        title: "OTHER",
        price: 2,
        gender: "MEN"
    }
]

const CreateOrder = ({ navigation }) => {
    return (
        <>
        <Header title="Order" secondary />
                <FlatList
                    data={orders}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => (
                        <View style={styles.card}>
                            <OrderCard item={item} />
                        </View>
                    )}
                    ListFooterComponent={
                        <View style={styles.button}>
                            <AppButton 
                                title="Next" 
                                backgroundColor={colors.secondary}
                                whiteText
                                onPress={() => navigation.navigate(routes.WASHPREFERENCES)}
                            />
                        </View>
                    }
                />
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    button: {
        // paddingVertical: 12,
        paddingHorizontal: 15
    }
})

export default CreateOrder
