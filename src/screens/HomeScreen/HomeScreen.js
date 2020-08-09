import React from 'react'
import { Text, View,TouchableHighlight } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'

const HomeScreen = (props) => {
  // const user = route.params.fullName;
  console.log(">>>>>>>Route",props.navigation.state.params)

  const routeToUserProfile = () => {
      props.navigation.navigate('UserProfile',props.navigation.state.params)
  }

    return (
      <View style = {styles.container}>

        <KeyboardAwareScrollView style={{borderWidth: 4,width:'100%'}}>
            <Text>Welcome</Text>
        </KeyboardAwareScrollView>
        <View style = {styles.footer}>
          <TouchableHighlight onPress = {routeToUserProfile}>
          <Text style= {{borderWidth:3}}> Profile </Text>

          </TouchableHighlight>

        </View>
      </View>

    )
}

export default HomeScreen
