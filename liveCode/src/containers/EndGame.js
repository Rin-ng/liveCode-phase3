import React, {Component} from 'react'
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native'

class EndGame extends Component{
   constructor(props){
      super(props)
   }

   render(){
      return(
         <View style={styles.container}>
            <Text style={styles.endText}>Game ended</Text>
            <TouchableOpacity
               style={styles.btn1}
               onPress={() => {}} >
               <Text style={styles.btnText}>Retry?</Text>
            </TouchableOpacity>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#F5FCFF',
   },
   btn1: {
      backgroundColor: "blue",
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 30,
      marginBottom: 20
   },
   btnText: {
      fontSize: 26,
      fontWeight: '400',
      color: "white",
  },
  endText:{
     fontSize: 36,
     fontWeight: '500',
     marginBottom: 20
  }
})

export default EndGame