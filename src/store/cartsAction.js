export const ADD_CARTS="ADD_CARTS"
export const INCREASE_QUANTITY="INCREASE_QUANTITY"
export const DECREASE_QUANTITY="DECREASE_QUANTITY"
export const DELETE_CART="DELETE_CART"

export const addToCarts = payload => ({
    type : ADD_CARTS,
    payload
})

export const increaseCarts = payload => ({
    type : INCREASE_QUANTITY,
    payload
})

export const decreaseCarts = payload => ({
    type : DECREASE_QUANTITY,
    payload

})
export const deleteCarts = payload => ({
    type : DELETE_CART,
    payload
})
