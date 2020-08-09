
import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import RegistrationScreen from '../screens/RegistrationScreen/RegistrationScreen'

const AuthNavigation = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Registration: { screen: RegistrationScreen }
  },
  {
    initialRouteName: 'Login'
  }
)

export default AuthNavigation
