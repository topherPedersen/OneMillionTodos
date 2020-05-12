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
  }

  render() {
    return(
    <View style={{flexDirection: 'row', flex: 100}}>

        <View style={{flex: 75}}>
          <Text style={{fontSize: 20}}>{this.props.todo}</Text>
        </View>

        <View style={{flex: 25}}>
          <Button title={"X"}/>
        </View>

    </View>
    );
  }
}

export default Todo;