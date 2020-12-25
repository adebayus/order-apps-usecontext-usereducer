import React, { createContext, useReducer } from 'react'

const initialState = {
    cart : [

    ]
}
console.log(initialState,"stepinitialstate")
let Reducer = (state,action) => {

    switch (action.type) {
      case "increment":
        if (!state.cart.length) {
            // return "true"
          return addToEmpetyCart(state, action.payload)
        
        } else {
            if(state.cart.some( x => x.id === action.payload.id )){
                return addQuantity(state, action.payload)
            }else {
                return addToCart(state,action.payload)
            }
        }

      default:
        return;
    }
}

function addQuantity(state, foodMenu){
    const cart = [ ...state.cart]
    const indexFood = cart.findIndex( x => x.id === foodMenu.id )

    const incrementQuanity = cart[indexFood].quantity + 1

    cart[indexFood] = {
        ...foodMenu,
        quantity : incrementQuanity
    } 
    return {
        cart : [
            ...cart
        ]
    }
}

function addToEmpetyCart(state, foodMenu){
    const newItem = {
        ...foodMenu,
        quantity : 1
    }
    return {
        cart : [ newItem ]
    } 
}

function addToCart(state, foodMenu) {
    const cart = [...state.cart]
    const newItem = {
        ...foodMenu,
        quantity : 1
    }
    return {
        cart : [...state.cart, newItem]
    }
}

const cartContext = createContext(initialState) 

function CartProvider (props) {
    const [state, dispatch] = useReducer(Reducer, initialState)
    return(
        <cartContext.Provider value={{state, dispatch}}>
            {props.children}
        </cartContext.Provider>
    )
}
export {cartContext, CartProvider}
