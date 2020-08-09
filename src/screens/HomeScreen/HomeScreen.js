import React from 'react'
import { Text, View,TouchableHighlight } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'
import styles from './styles'

const HomeScreen = ({route,navigation}) => {
  // const user = route.params.fullName;
  console.log(">>>>>>>Route",route)

  const routeToUserProfile = () => {
      navigation.navigate('UserProfile',route.params)
  }

    return (
      <View style = {styles.container}>

        <KeyboardAwareScrollView style={{borderWidth: 4,width:'100%'}}>
            <Text>Welcome {route.params.fullName}</Text>
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
