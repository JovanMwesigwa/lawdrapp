import React, {
    useEffect
} from 'react'
import {
    FlatList,
    StyleSheet,
    View
} from 'react-native'


import AppCard from '../components/AppCard'
import CircelProfilePic from '../components/CircelProfilePic'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import colors from '../config/colors'




const cardData = [{
        id: 1,
        title: "Wash",
        icon: require('../../assets/m1.png')
    },
    {
        id: 2,
        title: "Wash & Iron",
        icon: require('../../assets/iron.png')
    },
    {
        id: 3,
        title: "Dry Cleaning",
        icon: require('../../assets/dc2.png')
    },
    {
        id: 4,
        title: "Iron",
        icon: require('../../assets/iron.png')
    },
]

const HomeScreen = () => {

    return ( 
        <View style = {styles.container} >
            <Header title = "Welcome" subTitle = "Jovan Mwesigwa" back home />
            <SideBar />
            <View style = {styles.bottomHalf} >
                <FlatList 
                    data = {cardData} 
                    numColumns = {2} 
                    showsVerticalScrollIndicator = {false}
                    keyExtractor = {item => item.id.toString()}
                    renderItem = {({ item }) => ( 
                        <AppCard item = {item} />
                    )}
                /> 
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    bottomHalf: {
        alignItems: 'center',
        backgroundColor: colors.light100,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        flex: 1,
        paddingTop: 5,
        justifyContent: 'center'
    },
})

export default HomeScreen