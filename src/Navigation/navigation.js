import Login from '../Autehntication/Login.js/login'
import Signup from '../Autehntication/Signup/signup'
import ProductDetail from '../dashboard/productDetail'
import Dashboard from '../dashboard/dashboard'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import  {createStackNavigator} from 'react-navigation-stack'

const Auth = createStackNavigator({
    Login : {
        screen : Login,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },

    Signup : {
        screen : Signup,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },
})


const App = createStackNavigator({
    Dashboard : {
        screen : Dashboard,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    },

    ProductDetail : {
        screen : ProductDetail,
        headerMode: 'none',
        navigationOptions: {
            header: null,
        }
    }
})


const SwitchNavigator = createSwitchNavigator({

    Authentication: {
        screen: Auth
    },

    App: {
        screen: App
    },
})



const Navigator = createAppContainer(SwitchNavigator);

export default Navigator;