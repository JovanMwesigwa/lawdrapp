import React from 'react'
import { StyleSheet, View } from 'react-native'



const SideBar = () => {
    return (
        <View style={styles.container}>
            {/* <Text>Side Bar</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: "#fff",
        height: 65,
        paddingHorizontal: 24,
        width: "100%",
    },
})

export default SideBar


