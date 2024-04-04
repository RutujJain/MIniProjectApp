import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const SubHeader = () => {
    return (
        <View style={styles.headercontainer}>

        </View>
    )
}

export default SubHeader
const styles = StyleSheet.create({
    headercontainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 40,
    },
})