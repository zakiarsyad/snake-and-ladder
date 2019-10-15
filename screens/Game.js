import React, { useEffect } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import Constants from 'expo-constants'
import { useDispatch, useSelector } from 'react-redux'

import { generateBoard, rollDice } from '../store/actions'

export default Game = (props) => {
    const dispatch = useDispatch()
    const board = useSelector(state => state.board)
    const xPosition = useSelector(state => state.xPosition)
    const oPosition = useSelector(state => state.oPosition)
    const dice = useSelector(state => state.dice)
    const turn = useSelector(state => state.turn)
    const winner = useSelector(state => state.winner)

    useEffect(() => {
        dispatch(generateBoard())
    }, [])

    useEffect(() => {
        if (winner) props.navigation.navigate('End')
    }, [winner])

    const handleBack = () => {
        props.navigation.navigate('Home')
    }

    const handleRollDice = () => {
        dispatch(rollDice())
    }

    return (
        <View style={styles.container}>
            <Image
                style={ styles.ladder1 }
                source={{ uri: 'http://pngimg.com/uploads/ladder/ladder_PNG14787.png' }} />
            <Image
                style={styles.ladder2}
                source={{ uri: 'http://pngimg.com/uploads/ladder/ladder_PNG14787.png' }} />
            <Image
                style={styles.snake1}
                source={{ uri: 'https://freepngimg.com/thumb/snake/4-snake-png-image-picture-download--thumb.png' }} />
            <Image
                style={styles.snake2}
                source={{ uri: 'https://freepngimg.com/thumb/snake/4-snake-png-image-picture-download--thumb.png' }} />
            <TouchableOpacity
                onPress={handleBack}
                style={StyleSheet.absoluteFill, { marginTop: 20, marginLeft: 20, width: '100%', alignItems: 'flex-start' }}>
                <Text style={{ borderWidth: 1, borderRadius: 20, paddingHorizontal: 10, paddingVertical: 1, color: 'white', borderColor: 'white' }}>Back</Text>
            </TouchableOpacity>
            <Text style={{ marginVertical: 20, color: 'white', fontWeight: 'bold' }}>GAME</Text>
            <View style={{ flexWrap: 'wrap', flexDirection: 'row' }}>
                {board.map((square, i) => {
                    return (
                        <View
                            key={i}
                            style={[{ flexBasis: '20%', height: '20%', justifyContent: 'center', alignItems: 'center' }, (i % 2 === 0) ? { backgroundColor: '#34c0ea' } : { backgroundColor: '#2db17b' }]}>
                            {oPosition == square &&
                                <Text style={{ position: 'absolute', top: 5 }}>O</Text>
                            }
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>{square}</Text>
                            {xPosition == square &&
                                <Text style={{ position: 'absolute', bottom: 5 }}>X</Text>
                            }
                        </View>
                    )
                })}
            </View>
            <Text style={{ color: 'white', marginTop: 20 }}>Next Turn : {turn}</Text>
            <TouchableOpacity
                onPress={handleRollDice}
                style={{ marginTop: 30 }}>
                <Text style={{ backgroundColor: '#e5ad2b', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>ROLL DICE</Text>
            </TouchableOpacity>
            <Text style={{ color: 'white' }}>{dice}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#481349'
    },
    ladder1: {
        position: 'absolute',
        width: 50,
        height: 90,
        right: 10,
        bottom: 180,
        resizeMode: 'stretch',
        zIndex: 1
    },
    ladder2: {
        position: 'absolute',
        width: 50,
        height: 200,
        left: 40,
        bottom: 230,
        resizeMode: 'stretch',
        zIndex: 1,
        transform: [{ rotate: '30deg' }]
    },
    snake1: {
        position: 'absolute',
        width: 220,
        height: 50,
        right: 2,
        top:230,
        zIndex: 1,
        resizeMode: 'stretch',
        transform: [{ rotate: '-100deg'}]
    },
    snake2: {
        position: 'absolute',
        width: 80,
        height: 50,
        left: 100,
        bottom: 280,
        zIndex: 1,
        resizeMode: 'stretch',
        transform: [{ rotate: '-60deg' }]
    }
});