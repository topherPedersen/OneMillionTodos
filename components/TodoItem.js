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

  // Mark a todo item as completed
  markCompleted() {

    const toggledState = {
      completed: true,
    };
    this.setState(toggledState);

    const completedTodoId = this.props.id;
    const dispatchMarkCompleted = (id) => this.props.markCompleted(id);
    setTimeout( () => {
      dispatchMarkCompleted(completedTodoId);
    }, 0);
  }

  // Mark a todo item as NOT completed
  markNotCompleted() {

    const toggledState = {
      completed: false,
    };
    this.setState(toggledState);

    const notCompletedTodoId = this.props.id;
    const dispatchMarkNotCompleted = (id) => this.props.markNotCompleted(id);
    setTimeout( () => {
      dispatchMarkNotCompleted(notCompletedTodoId);
    }, 0);
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
            onPress={ () => { 
              this.state.completed ? this.markNotCompleted() : this.markCompleted();
            }} />
        </View>

    </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    markCompleted: (payload) => dispatch({type: 'MARK_COMPLETED', payload: payload}),
    markNotCompleted: (payload) => dispatch({type: 'MARK_NOT_COMPLETED', payload: payload}),
  };
};
export default connect(null, mapDispatchToProps)(TodoItem);