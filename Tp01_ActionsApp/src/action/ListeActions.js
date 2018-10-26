import React from 'react'
import {View, Text, FlatList} from 'react-native'
import UneAction from './UneAction'


const ListeActions = ({listeActions}) => {

    return (
        <View>
            <FlatList
                data={listeActions}
                renderItem={({item}) => <UneAction actionTitle={item}></UneAction>}
                keyExtractor={(item, index) => item}
            />
        </View>
    )
}

export default ListeActions