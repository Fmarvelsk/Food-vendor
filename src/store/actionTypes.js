export const SHOW_MODAL_LOGIN = "SHOW_MODAL_LOGIN"
export const HIDE_MODAL = "HIDE_MODAL"
export const SHOW_MODAL_SIGNUP = "SHOW_MODAL_SIGNUP"
export const SHOW_ORDER_NO = "SHOW_ORDER_NO"
export const SIGNED_USER = "SIGNED_USER"

export const showModalLogin = () => {
    return {
        type: SHOW_MODAL_LOGIN
    }
}

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}


export const showModalSignup = () => {
    return {
        type: SHOW_MODAL_SIGNUP
    }
}
export const showMealOrder = (payload) => {
    return{
        type : SHOW_ORDER_NO,
        payload
    }
    
}
export const signedUser = payload => {
    console.log(payload)
    return{
        type : SIGNED_USER,
        payload
    }
}