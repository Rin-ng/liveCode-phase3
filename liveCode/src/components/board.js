import React, {Component} from 'react'
import {View, StyleSheet, Dimensions, Text, Grid} from 'react-native'

class Home extends Component{
   constructor(props){
      super(props)
     
   }

   render(){
      return(
        <View style={styles.container}>
          <View style={{flexDirection:'row'}}>
              <View style={{ width: 65, height: 65, backgroundColor: 'orangered'}} >
                <Text style={{color:'white'}}> 21 </Text> 
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'salmon'}} >
                <Text style={{color:'white'}}> 22 </Text> 
                <Text>🐍</Text>
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'lightsalmon'}} >
              <Text style={{color:'white'}}> 23 </Text> 
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'pink'}} >
                <Text style={{color:'white'}}> 24 </Text> 
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'lightpink'}} >
                <Text style={{color:'white'}}> 25 </Text> 
              </View>
          </View>
          <View style={{flexDirection:'row'}}>
              <View style={{width: 65, height: 65, backgroundColor: 'powderblue'}} >
                <Text style={{color:'white'}}> 20 </Text> 
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'skyblue'}}>
                <Text style={{color:'white'}}> 19 </Text> 
                <Text>☝🏻 </Text>
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'steelblue'}} >
                <Text style={{color:'white'}}> 18 </Text> 
                <Text>🐍</Text>
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'blue'}} >
                <Text style={{color:'white'}}> 17 </Text> 
                <Text>🐍</Text>
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'darkblue'}} >
                <Text style={{color:'white'}}> 16 </Text> 
              </View>
          </View>
          <View style={{flexDirection:'row'}}>
              <View style={{ width: 65, height: 65, backgroundColor: 'orangered'}} >
                <Text style={{color:'white'}}> 11 </Text> 
                <Text>☝🏻 </Text>
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'salmon'}} >
                <Text style={{color:'white'}}> 12 </Text> 
                <Text>🐍</Text>
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'lightsalmon'}} >
              <Text style={{color:'white'}}> 13 </Text> 
              <Text>☝🏻 </Text>
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'pink'}} >
                <Text style={{color:'white'}}> 14 </Text> 
                <Text>🐍</Text>
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'lightpink'}} >
                <Text style={{color:'white'}}> 15 </Text> 
              </View>
          </View>
          <View style={{flexDirection:'row'}}>
              <View style={{width: 65, height: 65, backgroundColor: 'powderblue'}} >
                <Text style={{color:'white'}}> 10 </Text> 
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'skyblue'}}>
                <Text style={{color:'white'}}> 9 </Text> 
                <Text>🐍</Text>
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'steelblue'}} >
                <Text style={{color:'white'}}> 8 </Text> 
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'blue'}} >
                <Text style={{color:'white'}}> 7 </Text> 
                <Text>☝🏻 </Text>
              </View>
              <View style={{width: 65, height: 65, backgroundColor: 'darkblue'}} >
                <Text style={{color:'white'}}> 6 </Text> 
              </View>
          </View>
          <View style={{flexDirection:'row'}}>
              <View style={{ width: 65, height: 65, backgroundColor: 'orangered'}} > 
                <Text style={{color:'white'}}> 1 </Text>
                <Text style={{flex: 1, justifyContent:'center'}}> 🙂 </Text> 
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'salmon'}}>
                <Text style={{color:'white'}}> 2 </Text>
                <Text>☝🏻 </Text>
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'lightsalmon'}} >
                <Text style={{color:'white'}}> 3 </Text> 
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'pink'}} >
                <Text style={{color:'white'}}> 4 </Text> 
                <Text>🐍</Text>
              </View>
              <View style={{ width: 65, height: 65,backgroundColor: 'lightpink'}} >
                <Text style={{color:'white'}}> 5 </Text> 
              </View>
          </View>
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
     flexDirection: 'column',
     width: Dimensions.get('window').width,
   }
})

export default Home