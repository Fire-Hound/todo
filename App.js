import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, ScrollView, Dimensions, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const k = 0;

export default class App extends React.Component {
  state = {
    todo : [],
    i: []
  }
  removeTodo = (index) => {
    this.setState({
      todo : [...this.state.todo].filter((value)=>value!=this.state.todo[index]),
      i : [...this.state.i].filter((value)=>value!=index)
      // todo: this.state.todo.filter((value)=>value!=this.state.todo[index])
    })
  }
  addTodo = () => {
    this.setState({
      todo: [ ...this.state.todo,

        <View key = {++k}
        style={{ flex:1, flexDirection: 'row', 
        justifyContent: 'space-around', alignItems: 'center'}}>
          <TouchableOpacity style={styles.remove} 
          onPress={this.removeTodo.bind(this, this.state.i[this.state.i.length-1])}>
            <Icon name='md-remove-circle' color='#ee0000' size={40}/>
          </TouchableOpacity>

          <View style={styles.todo}>
            <TextInput autoFocus={true} multiline={true} placeholder={"Type something"}
            underlineColorAndroid="#ffffff"/>
          </View>
        </View>
      ],
      i :[...this.state.i, (this.state.i[this.state.i.length-1]+1 || 0)] 
    }
  )

  }
  render() {
    return (
      <View style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        {this.state.todo}
        
      </ScrollView>
<Text> {this.state.i} </Text>
      <TouchableOpacity style={styles.add} onPress={this.addTodo}>
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
