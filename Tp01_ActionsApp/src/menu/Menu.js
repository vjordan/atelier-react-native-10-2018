import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = () => (
    <View style={styles.menu}>
        <OptionMenu nom="Toutes"/>
        <OptionMenu nom="Actives"/>
        <OptionMenu nom="Terminées"/>
    </View>
)

const styles = StyleSheet.create({
    menu: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd'
    }
})
export default Menu