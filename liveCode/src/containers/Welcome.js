import React, {Component} from 'react'
import {View, StyleSheet, Button, TouchableOpacity, Text} from 'react-native'
import { StackNavigator} from 'react-navigation';
import HomeScreen from './Home'
 const Navigate = StackNavigator({
   Home: { screen: HomeScreen },
 });
 
 
class Welcome extends Component{
   constructor(props){
      super(props)
   }

   render(){
      const { navigate } = this.props.navigation;
      return(
         <View style={styles.container}>
            <TouchableOpacity
               style={styles.btn1}
               onPress={() => navigate('Home', {
                  playerNum: 1
               })}>
               <Text style={styles.btnText}>Single Player Mode</Text>
            </TouchableOpacity>

           <TouchableOpacity
               style={styles.btn2}
               onPress={() => navigate('Home',{
                  playerNum: 2
               })} >
               <Text style={styles.btnText}>Two Players Mode</Text>
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
   btn2:{
      backgroundColor:'red',
      paddingHorizontal: 15,
      paddingVertical: 5,
      borderRadius: 30
   },
   btnText: {
      fontSize: 30,
      fontWeight: '400',
      color: "white",
  },
})

export default Welcome