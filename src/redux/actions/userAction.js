// import axios from 'axios'
// import { NavigationActions } from 'react-navigation'
import NavigtionService from '../../Navigation/NavigationService'
import { Alert, AsyncStorage } from 'react-native'



export function login(formData) {
    return function (dispatch) {
      dispatch({ type: "LOGIN_PROCESSING" });
      // const formData = new FormData();
      // formData.append("email", email),
      // formData.append("password", password),
      fetch('http://hnhtechsolutions.com/khalid/offroute/wp-json/jwt-auth/v1/token', {
        method: 'POST',
        body: formData,
        headers:{
                  "Content-Type": "multipart/form-data"
        }
      }).then(res => res.json())
        .then(response => {
            console.log("success", response.code)
            if(response.code) {
                Alert.alert('Error', response.message)
                dispatch({ type: "ERROR", payload: error });
            }else {
                dispatch({type: "LOGIN_PROCESSED", payload: response.data  })
                Alert.alert('Success', 'Logins Successfully')
                NavigtionService.navigate('App')

            }


        })
        .catch(error =>{ 
          dispatch({ type: "ERROR", payload: error }); dispatch({ type: "CLEAR_PROCESSING" });
            alert('ERROR', error)
        })
    }
  }






  export function signup(formData) {
    return function (dispatch) {
      dispatch({ type: "SIGNUP_PROCESSING" });
      // const formData = new FormData();
      // formData.append("email", email),
      // formData.append("password", password),
      fetch('https://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/customers', {
            method: 'POST',
            body: formData,
            headers:{
                      "Content-Type": "multipart/form-data"
            }
          }).then(res => res.json())
            .then(response => {
                console.log("success", response.code)
                if(response.code) {
                    Alert.alert('Error', response.message)
                    this.setState({loader: false})
                    dispatch({ type: "ERROR", payload: error });
                }else {
                    Alert.alert('Success', 'Signup Successfully')
                    dispatch({type: "SIGNUP_PROCESSED", payload: response.data  })
                    NavigtionService.navigate('Login')
                }
    
    
            })
            .catch(error =>{ 
                console.log('error error', error)
                alert('ERROR', error)
                this.setState({loader: false})

            })
          }
  }



  export function getProducts(formData) {
    return function (dispatch) {
      dispatch({ type: "GET_PRODUCT_PROCESSING" });
      fetch('http://hnhtechsolutions.com/khalid/offroute/wp-json/wc/v3/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            dispatch({ type: "GET_PRODUCT_PROCESSED", payload: data });

          // Prints result from `response.json()` in getRequest
        })
        .catch(error => {
          dispatch({ type: "ERROR", payload: error });
          console.log(error)})


      }
  }

 