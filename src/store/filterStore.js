import { SORT_BY_LESS_POPULAR, SORT_BY_MOST_POPULAR, LOAD_DATA} from './index'
import { SHOW_MODAL_LOGIN, HIDE_MODAL, SHOW_MODAL_SIGNUP, SHOW_ORDER_NO, SIGNED_USER, SIGNED_BUSSINESS } from './actionTypes';
const initialState = {
    show: false,
    loginPage: true,
    order : true,
    user : null,
    busId : {}
}

export const filterStore = ( state = initialState, action) =>{
    switch(action.type){
        case SORT_BY_MOST_POPULAR:
            return state
            case SORT_BY_LESS_POPULAR:
                return{
                    ...state                    
                }
                case LOAD_DATA:
                    let count = action.payload.count;
                    let products =count
                    
                    return {
                        ...state,
                        products
                    }

                    case SHOW_MODAL_LOGIN:
                        return {
                            ...state,
                            show: true,
                            loginPage: true,
                        }

                    case HIDE_MODAL:
                        return {
                            ...state,
                            show: false,
                        };

                    case SHOW_MODAL_SIGNUP:
                        return {
                            ...state,
                            show: true,
                            loginPage: false,
                        };

                    case SHOW_ORDER_NO : 
                    console.log(action)
                    return {
                        ...state,
                        order: action.payload
                    }

                    case SIGNED_USER:
                        return {
                            ...state,
                            user : action.payload,
                            show: false
                        }
                        case SIGNED_BUSSINESS:
                            return {
                                ...state,
                                busId : action.payload
                            }
            
                    default :
                return state

    }
}
