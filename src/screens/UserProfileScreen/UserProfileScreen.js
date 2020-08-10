import React from 'react'
import styles from './styles.js'
import {View,Text} from 'react-native'
import {firebase} from './../../firebase/config'



const UserProfileScreen = ({route,navigation}) => {


  return(
    <View style = {styles.container}>

      <Text style = {styles.text}> {route.params.fullName} </Text>
      <Text style = {styles.text}> {route.params.email} </Text>
      <Text onPress={signOut} style = {styles.text}> Log Out </Text>

    </View>
  );
}

export const signOut = () => {

  firebase.auth().signOut().then(function() {
    console.log('Sign Out Successful')

    }).catch(function(error) {
      console.log('>>>>>>>>>Error>>>>>>>>>')
      console.log(error)
    });

}


export default UserProfileScreen
