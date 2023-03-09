import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from '../constants/Colors'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.header,
        alignItems: 'center',
        justifyContent: 'center',
        
    }, 
    title: {
        fontSize: 22, 
        fontFamily: 'montserrat-bold', 
        textTransform: 'uppercase'
    }
})