import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  FlatList,
  Button,
} from 'react-native';

// Import React-Redux
import { 
  connect, 
  Provider 
} from 'react-redux';

class TodoItem extends React.PureComponent {
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
          <Text style={{fontSize: 16, textDecorationLine: this.state.completed ? 'line-through' : 'none'}}>{this.props.task}</Text>
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

const mapDispatchToProps = dispatch => {
  return {
    markCompleted: (payload) => dispatch({type: 'MARK_COMPLETED', payload: payload}),
  };
};
export default connect(null, mapDispatchToProps)(TodoItem);