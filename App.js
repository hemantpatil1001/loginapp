import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen, UserProfileScreen } from './src/screens';
import {decode, encode} from 'base-64';
import {Text,View} from 'react-native';
import {firebase} from './src/firebase/config';

if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect( () => {
    const usersRef =  firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged( firebase_user => {
      if (firebase_user) {
        
         usersRef
          .doc(firebase_user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)

          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
        setUser(null)
      }
    });
  }, []);

  if (loading) {
    return (
      <></>
    )
  }




  return (

    <NavigationContainer>
      <Stack.Navigator>
      {console.log("User in RETURN >>> ",user)}
            {
              user !=null ? (
                <>
                  <Stack.Screen name="Home" component={HomeScreen}  initialParams={user}/>
                  <Stack.Screen name="UserProfile" component={UserProfileScreen}/>
                </>
              ) : (
                <>
                  <Stack.Screen name="Login" component={LoginScreen} />
                  <Stack.Screen name="Registration" component={RegistrationScreen} />
                </>
              )
            }
      </Stack.Navigator>
    </NavigationContainer>


  );
}
