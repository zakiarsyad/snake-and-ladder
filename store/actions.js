import store from '.'

export const generateBoard = () => {
    let board = []
    let number = 1

    for (let i = 0; i < 5; i++) {
        let row = []

        for (let j = 0; j < 5; j++) {
            row.unshift(number)
            number++
        }

        if (i % 2 === 0) row.reverse()

        board.unshift(...row)
    }

    return ({
        type: 'GENERATEBOARD',
        board
    })
}

export const rollDice = () => dispatch => {
    let dice = Math.floor(Math.random() * 6) + 1

    dispatch(setDice(dice))

    let xPosition = store.getState().xPosition
    let oPosition = store.getState().oPosition

    if (store.getState().turn == 'X') {
        xPosition += dice
        if (xPosition > 25) xPosition = 25 - (xPosition - 25)

        if (xPosition == 25) dispatch(setWinner('X'))

        if (xPosition == 5)  xPosition = 6
        if (xPosition == 10) xPosition = 19
        if (xPosition == 13) xPosition = 9
        if (xPosition == 24) xPosition = 7

        dispatch(setXPosition(xPosition))
        dispatch(setTurn('O'))
    } else {
        oPosition += dice
        if (oPosition > 25) oPosition = 25 - (oPosition - 25)

        if (oPosition == 25) dispatch(setWinner('O'))

        if (oPosition == 5) oPosition = 6
        if (oPosition == 10) oPosition = 19
        if (oPosition == 13) oPosition = 9
        if (oPosition == 24) oPosition = 7

        dispatch(setOPosition(oPosition))
        dispatch(setTurn('X'))
    }
}

const setTurn = turn => ({ type: 'SETTURN', turn })
const setXPosition = position => ({ type: 'SETXPOSITION', position })
const setOPosition = position => ({ type: 'SETOPOSITION', position })
const setWinner = winner => ({ type: 'SETWINNER', winner })
const setDice = dice => ({ type: 'SETDICE', dice })
export const startGame = () => ({ type: 'STARTGAME' })
const snakeLadder = (position) => {
    if (position == 5) return 6
    if (position == 10) return 19
    if (position == 13) return 9
    if (position == 24) return 7
}