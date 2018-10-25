import React from 'react'
import {
    Text,
    TextInput,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'

const etatInitialForm = {
    nom: '',
    auteur: ''
}

class ListeLivres extends React.Component {

    state = etatInitialForm

    miseAJourSaisie = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    ajouterLivre = () => {
        // TODO décommenter
        // this.props.dispatchAjouterLivre(this.state)
        this.setState(etatInitialForm)
    }


    render() {
        // TODO décommenter
        // const {livres} = this.props

        // TODO supprimer
        const livres = []
        return (
            <View style={styles.conteneur}>
                <Text style={styles.titre}>Livres</Text>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.conteneurLivres}
                >
                    {
                        livres.map((livre, index) => (
                            <View style={styles.livre} key={index}>
                                <Text style={styles.nom}>{livre.nom}</Text>
                                <Text style={styles.auteur}>{livre.auteur}</Text>
                            </View>
                        ))
                    }
                </ScrollView>
                <View style={styles.conteneurSaisie}>
                    <View style={styles.wrapper}>
                        <TextInput
                            value={this.state.nom}
                            onChangeText={value => this.miseAJourSaisie('nom', value)}
                            style={styles.saisie}
                            placeholder='Titre'
                        />
                        <TextInput
                            value={this.state.auteur}
                            onChangeText={value => this.miseAJourSaisie('auteur', value)}
                            style={styles.saisie}
                            placeholder='Auteur'
                        />
                    </View>
                    <TouchableOpacity onPress={this.ajouterLivre}>
                        <View style={styles.conteneurBoutonAjouter}>
                            <Text style={styles.boutonAjouter}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneurSaisie: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopColor: '#ededed',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    conteneur: {
        flex: 1
    },
    conteneurLivres: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flex: 1
    },
    titre: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    livre: {
        padding: 20
    },
    nom: {
        fontSize: 18
    },
    auteur: {
        fontSize: 14,
        color: '#999'
    },
    wrapper: {
        flex: 1
    },
    saisie: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5
    },
    boutonAjouter: {
        fontSize: 28,
        lineHeight: 28
    },
    conteneurBoutonAjouter: {
        width: 80,
        height: 80,
        backgroundColor: '#ededed',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    }
})

export default ListeLivres