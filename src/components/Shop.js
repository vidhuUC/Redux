import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actioncreators } from '../State/index'

const Shop = () => {
    const dispatch = useDispatch()
    const {buyShoe,sellShoe} = bindActionCreators(actioncreators, dispatch)
    return (
        <div className='container my-3'>
            <h2> Buy Shoes at 50</h2>
            <button className="btn btn-primary mx-3" onClick={() => {sellShoe(100)}}>-</button>
            Add this to cart
            <button className="btn btn-primary mx-3" onClick={() => {buyShoe(100)}}>+</button>
        </div>
    )
}

export default Shop 
