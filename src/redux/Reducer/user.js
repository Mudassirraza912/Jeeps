export default function reducer(state={
    fetching: false,
    fetched: false,
    error: null,
    usertData : [],
    products: []
  }, action) {
  
    switch (action.type) {
  
      case "LOGIN_PROCESSING": {
        return {...state, fetching: true}
      }
      case "LOGIN_PROCESSED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          usertData: action.payload,
        }
      }


      case "SIGNUP_PROCESSING": {
        return {...state, fetching: true}
      }
      case "SIGNUP_PROCESSED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          usertData: action.payload,
        }
      }
      case "ERROR": {
        return {
          ...state,
          fetching: true,
          fetched: false,
          usertData: action.payload,
        }
      }


      case "GET_PRODUCT_PROCESSING": {
        return {...state, fetching: true}
      }
      case "GET_PRODUCT_PROCESSED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          products: action.payload,
        }
      }
      case "ERROR": {
        return {
          ...state,
          fetching: true,
          fetched: false,
          usertData: action.payload,
        }
      }
   
  
    }
  
    return state
  }
  