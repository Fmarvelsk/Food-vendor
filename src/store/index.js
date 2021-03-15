export const SORT_BY_MOST_POPULAR = "SORT_BY_MOST_POPULAR"
export const FILTER_BY_VALUE = "FILTER_BY_VALUE"
export const LOAD_DATA = "LOAD_DATA"
/*export const SHOW_ORDER_NO = "SHOW_ORDER_NO"*/

export const sortByHighRating = payload =>({
    type : SORT_BY_MOST_POPULAR,
    payload
})
export const filterValue = payload => ({
    type : FILTER_BY_VALUE,
    payload
})
export const loadData = payload => ({
    type : LOAD_DATA,
    payload 
})
/*export const showOrderNO = payload => ({ 
 type: SHOW_ORDER_NO, 
 payload
})*/