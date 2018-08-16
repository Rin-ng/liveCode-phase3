import React, {Component} from 'react'
import {View, StyleSheet, Button, Dimensions, TouchableOpacity, Text} from 'react-native'
import Board from '../components/board'
import {connect} from 'react-redux';
import {DiceRandom} from '../redux/actions/playerMovement'

class Home extends Component{
   constructor(props){
      super(props)
   }

   shakeDice(){
      this.props.getDiceValue()
      setTimeout(()=>this.showDice(), 400);
   }

   showDice(){
      console.log("--->>>", this.props.DiceRandom.movement);
      let diceRoll = this.props.DiceRandom.movement
      alert(`Dice Value: ${diceRoll}`)
   }

   render(){
      const {navigation} = this.props;
      const playerNum = navigation.getParam('playerNum', 0);
      return(
         <View style={styles.container}>
            <Board/>
            <TouchableOpacity
               style={styles.btn}
               onPress={() => this.shakeDice()} >
               <Text style={styles.btnText}>Shake Dice!</Text>
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
   },
   btn:{
      backgroundColor:'darkmagenta',
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 30,
      marginVertical: 20,
   },
   btnText:{
      fontSize: 16,
      color: 'white',
      fontWeight: '600'
   }
})

const mapStateToProps = (state) =>{
   return {
      DiceRandom : state,
   }
 }
 
 const mapDispatchToProps = (dispatch) =>{
   return {
     getDiceValue : () => dispatch(DiceRandom())
   }
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Home);