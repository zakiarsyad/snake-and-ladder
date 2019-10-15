import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default End = (props) => {
    const winner = useSelector(state => state.winner)

    const handlePlayAgain = () => {
        props.navigation.navigate('Home')
    }

    return (
        <View style={styles.container}>
            <Text>THE WINNER IS : {winner}</Text>
            <TouchableOpacity
                onPress={handlePlayAgain}>
                <Text style={{ backgroundColor: '#e5ad2b', borderRadius: 20, paddingHorizontal: 20, paddingVertical: 5, color: 'white' }}>PLAY AGAIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});