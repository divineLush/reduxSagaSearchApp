export const GET_DATA = 'GET_DATA'
export const DATA_RECIEVED = 'DATA_RECIEVED'

export const getData = (str) => dispatch => {
    dispatch({ type: GET_DATA, payload: str })
}