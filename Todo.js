import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  Button,
} from 'react-native';

class Todo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      completed: false,
    }
  }

  toggle() {
    const toggledState = {
      completed: !this.state.completed,
    };
    this.setState(toggledState);
  }

  render() {
    return(
    <View style={{flexDirection: 'row', flex: 100}}>

        <View style={{flex: 75}}>
          <Text style={{fontSize: 20, textDecorationLine: this.state.completed ? 'line-through' : 'none'}}>{this.props.todo}</Text>
        </View>

        <View style={{flex: 25}}>
          <Button 
            title={ this.state.completed ? "Undo" : "X"}
            onPress={ () => this.toggle() } />
        </View>

    </View>
    );
  }
}

export default Todo;