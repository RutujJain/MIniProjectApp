import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Notification = () => {
    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Notification
