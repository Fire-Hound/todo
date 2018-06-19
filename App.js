import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Todo from './components/todo';

export default class App extends React.Component {
  state = {
    todo : [],
  }
  remove = (index) => {
    let mapped = [...this.state.todo].map(
      (v,i)=>{
        if(i==index) return null;
        return(v)
      }
    )
    this.setState({
      todo : mapped
    })
    console.log(mapped)
  }
  add = () => {

    this.setState({
      todo: [ ...this.state.todo,
        <Todo key={this.state.todo.length} 
        styles={styles} remove={this.remove.bind(this, this.state.todo.length)}/>
      ],
    }
  )

  }
  render() {
    return (
      <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.todo}
        
      </ScrollView>
      <TouchableOpacity style={styles.add} onPress={this.add}>
          <Icon name='md-add-circle' color='#00ee00' size={61}/>
        </TouchableOpacity>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: StatusBar.currentHeight || 20
  },
  todo:{
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10, 
    width: Dimensions.get("window").width - 60,
    borderBottomWidth: 1,
    borderColor: 'grey'
  },
  add:{
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#ffffff'
  },
  remove:{
    paddingRight: 10
  }
});
