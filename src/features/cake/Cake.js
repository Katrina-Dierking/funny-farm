import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, restocked } from './cakeSlice'

const Cake = () => {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()

  return (
    <div>
        <h2>Humber of Cakes - {numOfCakes}</h2>
        <button onClick={()=> dispatch(ordered())}>Order Cake</button>
        <button onClick={()=> dispatch(restocked(2))}> Restock</button>
    </div>
  )
}

export default Cake