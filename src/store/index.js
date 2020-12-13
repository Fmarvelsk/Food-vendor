export const SORT_BY_MOST_POPULAR = "SORT_BY_MOST_POPULAR"
export const SORT_BY_LESS_POPULAR = "SORT_BY_LESS_POPULAR"
export const LOAD_DATA = "LOAD_DATA"

export const sortByHighRating = payload =>({
    type : SORT_BY_MOST_POPULAR,
    payload
})
export const sortByLowRating = payload => ({
    type : SORT_BY_LESS_POPULAR,
    payload
})
export const loadData = payload => ({
    type : LOAD_DATA,
    payload 
})
