import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

interface Props {

}

const Home = (props: Props) => {
     return (
          <SafeAreaView style={{ flex: 1 }}>
               <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'red' }}>

               </View>
          </SafeAreaView>
     )
}

export default Home
