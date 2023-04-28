const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'BUY_SHOE':
            return state + action.payload
        case 'SELL_SHOE':
            return state - action.payload
        default:
            return state
    }

}

export default reducer