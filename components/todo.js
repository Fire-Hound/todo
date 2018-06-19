import React, { Component } from "react";
import { 
    View,
    TextInput,
    TouchableOpacity
    } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

export default  Todo = (props) => {
    return(
    <View
    style={{ flex:1, flexDirection: 'row', 
    justifyContent: 'space-around', alignItems: 'center'}}>
    
        <TouchableOpacity style={props.styles.remove} 
        onPress={props.remove}>
            <Icon name='md-remove-circle' color='red' size={40}/>
        </TouchableOpacity>

        <View style={props.styles.todo}>
            <TextInput autoFocus={true} multiline={true} placeholder={"Type something"}
            underlineColorAndroid="#ffffff" />
        </View>
    </View>   );
    }



