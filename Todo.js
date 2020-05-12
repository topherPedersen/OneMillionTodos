import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
} from 'react-native';

class Todo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <View>
        <Text>{this.props.todo}</Text>
    </View>
    );
  }
}

export default Todo;