export const SHOW_MODAL_LOGIN = "SHOW_MODAL_LOGIN"
export const HIDE_MODAL = "HIDE_MODAL"
export const SHOW_MODAL_SIGNUP = "SHOW_MODAL_SIGNUP"

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
