import React from 'react'
import {StyleSheet, View, ScrollView} from 'react-native'
import Entete from './src/Entete'
import Saisie from './src/Saisie'
import BoutonCreer from './src/BoutonCreer'
import ListeActions from './src/action/ListeActions'
import Menu from './src/menu/Menu'

/**
 * Composant d'entrée de l'application.
 */
export default class App extends React.Component {

    // état global de l'application
    // il y aura probalement d'autres informations à stocker
    state = {
        texteSaisie: '',
        actions: [],
        etatActives: false,
        etatTerminees: false
    }

    /**
     * Méthode invoquée lorsque que la saisie change.
     *
     * @param nouvelleSaisie la valeur saisie
     */
    quandLaSaisieChange(nouvelleSaisie) {
        this.setState({texteSaisie: nouvelleSaisie})
        console.log('La saisie a changé', nouvelleSaisie)
    }

    /**
     * Méthode invoquée lors du clic sur le bouton `Valider`.
     */
    validerNouvelleAction() {
        console.log('Vous avez cliqué sur Valider !');
        const action = {
            texte : this.state.texteSaisie,
            etatTerminer : false
        }
        this.setState(prev => ({actions:[...prev.actions,action],texteSaisie:''}))
    }

    actionTerminer = indexCourant => {
        this.setState(prev => ({actions:prev.actions.map((action,index) => index == indexCourant ? {...action,etatTerminer:!action.etatTerminer} : action)}))
    }

    actionSupprimer = indexCourant => {
        this.setState(prev => ({actions:prev.actions.filter((actions,index) => index !== indexCourant)}))
    }

    actionMenu = nom => {
        if (nom=="Actives") {
            this.setState({etatActives: true, etatTerminees: false})
        } else if (nom=="Terminées") {
            this.setState({etatTerminees: true, etatActives: false})
        } else {
            this.setState({etatActives: false, etatTerminees: false})
        }
    }

    render() {
        const {texteSaisie,actions,etatActives,etatTerminees} = this.state

        return (
            <View style={styles.conteneur}>
                <ScrollView keyboardShouldPersistTaps='always' style={styles.content}>
                    <Entete/>
                    <Saisie texteSaisie={texteSaisie} evtTexteModifie={(titre) => this.quandLaSaisieChange(titre)}/>
                    <ListeActions
                        listeActions={actions} actionTerminer={this.actionTerminer} actionSupprimer={this.actionSupprimer} etatActives={etatActives} etatTerminees={etatTerminees}
                    />
                    <BoutonCreer onValider={() => this.validerNouvelleAction()}/>
                </ScrollView>
                <Menu actionMenu={this.actionMenu}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    conteneur: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        paddingTop: 60,
    },
})