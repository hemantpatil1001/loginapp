
import { createStackNavigator } from 'react-navigation-stack'
import {HomeScreen, UserProfileScreen} from '../screens'

const AppNavigation = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    UserProfile: {screen: UserProfileScreen}
  },
  {
    initialRouteName: 'Home'
  }
)

export default AppNavigation
