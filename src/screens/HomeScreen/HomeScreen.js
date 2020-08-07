import React from 'react'
import { Text, View } from 'react-native'

export default function HomeScreen({route,navigation}) {
  const user = route.params.fullName;
  console.log(route)
  console.log(user);
    return (

        <View>
            <Text>Welcome {user}</Text>
        </View>
    )
}
