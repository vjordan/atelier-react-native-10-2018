import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({listeActions, actionTerminer, actionSupprimer, etatActives, etatTerminees}) => {

    return (
        <View>
            <FlatList
                data = {etatActives==true ? (listeActions.filter((action) => action.etatTerminer == false)) : (etatTerminees==true ? (listeActions.filter((action) => action.etatTerminer == true)) : listeActions)}
                renderItem={({item, index}) => <UneAction
                    actionTitle={item.texte} actionTerminer={() => actionTerminer(index)} actionSupprimer={() => actionSupprimer(index)} etatTerminer={item.etatTerminer}>
                </UneAction>}
                keyExtractor={(item, index) => item.texte}
            />
        </View>
    )
}

export default ListeActions