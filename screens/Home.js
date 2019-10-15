import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native'
import Constants from 'expo-constants'
import { useDispatch } from 'react-redux'

import { startGame } from '../store/actions'

export default Home = (props) => {
    const dispatch = useDispatch()

    const handleStart = () => {
        dispatch(startGame())
        props.navigation.navigate('Game')
    }

    return (
        <View style={styles.container}>
            <Text style={{ color: 'white' }}>Hi, Let's play a game</Text>
            <TouchableOpacity onPress={handleStart}>
                <Text style={styles.button}>START GAME</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#481349'
    },
    button: {
        backgroundColor: '#e5ad2b',
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 5,
        color: 'white'
    }
});