import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Welcome extends Component {
    constructor(props){
        super(props);
        this.state = {
            price: []
        }
    };
   
    
    
    componentDidMount()
    {
        //http://46.101.100.59:3000
      fetch('http://46.101.100.59:3000')
        //.then(res => console.log("This is the return for the component" + res["_bodyText"]));
        .then(res => this.setState({price:res["_bodyText"]}));
        
    }
    
    
  


    
    
    
    
  
    

  render()  {
     

    return (
       
      <View>
         
        <Text style={styles.instructions}>
        Aktueller Kurs:
         {this.state.price}
          
         
         < /Text>
       

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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
