import { FILTER_BY_VALUE, SORT_BY_MOST_POPULAR, LOAD_DATA} from './index'
import { ADD_CARTS, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_CART } from './cartsAction'
import { 
SHOW_MODAL_LOGIN, 
HIDE_MODAL, SHOW_MODAL_SIGNUP, 
SHOW_ORDER_NO, SIGNED_USER, 
SIGNED_BUSSINESS } from './actionTypes';
import {tdData} from '../Components/Business/Data'

const initialState = {
    show: false,
    loginPage: true,
    carts:[],
    order : true,
    user : null,
    busId : {},
    numberOfCarts : 0,
    data : tdData
    
}

export const filterStore = ( state = initialState, action) =>{
    switch(action.type){
/*        case SORT_BY_DATE:
            let statusArr = action.payload.direction === 'asc'  ?
            sortAsc(state.filteredProducts, 'name') :
            sortDesc(state.filteredProducts, 'name');
     
        return {
            ...state,
            filteredProducts: sortedArr
        };*/

                 case FILTER_BY_VALUE:
                    let value = action.payload.value
                    let filterValue = state.data.filter( result => result.includes(value))
                    
                return{
                    ...state,
                    data : filterValue
                    
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


export const Carts = (state = initialState, action) =>{
    switch(action.type){
        case ADD_CARTS :
            if(state.numberOfCarts === 0){
                let newCarts = {
                    id : action.payload.id,
                    quantity : 1,
                    name : action.payload.name,
                    image : action.payload.image,
                    price : action.payload.price
                }
                state.carts.push(newCarts)
            }
            else {
                let check = false
                state.carts.forEach((item, key) => {
                if(item.id === action.payload.id){
                    state.carts[key].quantity++;
                    check = true
                }
                
                })
                
                if(!check){
                let carts = {
                    id : action.payload.id,
                    quantity : 1,
                    name : action.payload.name,
                    image : action.payload.image,
                    price : action.payload.price
                }
                state.carts.push(carts)
            }
        }
            //console.log(state.numberOfCarts)
            
            return{
                ...state,
                numberOfCarts : state.numberOfCarts+1
            }

            case INCREASE_QUANTITY:
                state.numberCarts++
                state.carts[action.payload].quantity++;
                return{
                    ...state
                }
                case DECREASE_QUANTITY:
                    let quantity = state.carts[action.payload].quantity;
                    if(quantity>1){
                        state.numberCarts--;
                        state.carts[action.payload].quantity--;
                    }                   
                    return{
                        ...state
                    }

                case DELETE_CART:
                    let quantity_ = state.carts[action.payload].quantity;
                    return{
                        ...state,
                        numberCart:state.numberCarts - quantity_,
                        carts:state.carts.filter(item=>{
                            return item.id!==state.carts[action.payload].id
                        })
                    }

                    
            default : 
            return state
    }

}

export const TotalQuantity = (carts) =>{
    let quantity
    quantity = carts.price * carts.quantity
    return quantity.toFixed(2)
}

export const TotalProduct = (result) =>{
        let total = 0
        result.map((result) => total+=result.price * result.quantity )
        return total.toFixed(2)
}

export const Total = (result) => {
    let total = 0
    result.map((result) => total+= result.price * result.quantity)
    let sum = total + 20.00
    return sum.toFixed(2)
}
