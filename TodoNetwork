import React from 'react';
import {
  FlatList,
  ActivityIndicator,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button,
} from 'react-native';

export default class TodoNetwork extends React.Component {
  state = { isLoading: true, addInput: false, input: '' };

  componentDidMount() {
    return this.getAllTodo();
  }
  add = () => {
    this.postTodo();
  };
  changeToInput = () => {
    this.setState({ addInput: true });
  };
  postTodo = () => {
    fetch('http://192.168.1.110:5000/', {
      method: 'post',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ todo: this.state.input }),
    })
      .then(res => res.json())
      .then(this.getAllTodo());
  };

  getAllTodo = () => {
    fetch('http://192.168.1.110:5000/all/')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  render() {
    if (this.state.isLoading && !this.state.addInput) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    } else if (!this.state.isLoading && !this.state.addInput) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <FlatList
            data={this.state.dataSource}
            renderItem={({ item }) => {
              return <Text> {item.todo} </Text>;
            }}
            keyExtractor={(item, index) => index.toString()}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={this.changeToInput}
              style={{
                backgroundColor: '#000044',
                height: 50,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Add Todo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: '#000044',
                height: 50,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderLeftWidth: 0.5,
                borderColor: 'white',
              }}>
              <Text style={{ color: 'white', fontSize: 20 }}>Refresh</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else {
      return (
        <View style={{ flex:1, padding: 20, justifyContent: "center", alignItems: "center" }}>
          <TextInput
            value={this.state.input}
            onChangeText={text => this.setState({ input: text })}
          />
          <Button
            title="Add"
            onPress={() => {
              this.add();
              this.setState({ input: '', addInput: false });
            }}
          />
        </View>
      );
    }
  }
}
