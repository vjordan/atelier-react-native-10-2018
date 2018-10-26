import React from 'react'
import { View, StyleSheet } from 'react-native'
import OptionMenu from './OptionMenu'

/**
 * Composant Menu.
 */
const Menu = ({actionMenu}) => (
    <View style={styles.menu}>
        <OptionMenu nom="Toutes" actionMenu={() => actionMenu("Toutes")}/>
        <OptionMenu nom="Actives" actionMenu={() => actionMenu("Actives")}/>
        <OptionMenu nom="Terminées" actionMenu={() => actionMenu("Terminées")}/>
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