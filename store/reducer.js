
const initialState = {
    board: [],
    xPosition: 0,
    oPosition: 0,
    turn: 'X',
    winner: '',
    dice: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GENERATEBOARD':
            return {
                ...state,
                board: action.board
            }
        case 'SETTURN':
            return {
                ...state,
                turn: action.turn
            }
        case 'SETXPOSITION':
            return {
                ...state,
                xPosition: action.position
            }
        case 'SETOPOSITION':
            return {
                ...state,
                oPosition: action.position
            }
        case 'SETWINNER':
            return {
                ...state,
                winner: action.winner
            }
        case 'SETDICE':
            return {
                ...state,
                dice: action.dice
            }
        case 'STARTGAME':
            return {
                ...state,
                xPosition: 0,
                oPosition: 0,
                turn: 'X',
                winner: '',
                dice: 0
            }
        default:
            return state
    }
}