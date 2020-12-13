import { SORT_BY_LESS_POPULAR, SORT_BY_MOST_POPULAR, LOAD_DATA } from './index'
const initialState = {
   
}

const filterStore = ( state = initialState, action) =>{
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
                    };default :
                return state

    }
}
export default filterStore