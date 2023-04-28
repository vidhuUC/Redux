export const buyShoe = (amount) => {
    return (dispatch)=> {
        dispatch({
            type: 'BUY_SHOE',
            payload: amount
        })
    }
}

export const sellShoe = (amount) => {
    return (dispatch)=> {
        dispatch({
            type: 'SELL_SHOE',
            payload: amount
        })
    }
}