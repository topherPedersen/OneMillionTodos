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
} from 'react-native';

// Import Components
// import TodoItem from './TodoItem';

// Import React-Redux
import { 
  connect, 
  Provider 
} from 'react-redux';

function randomStr() {
  let a = Math.random().toString(36).substring(2);
  let b = Math.random().toString(36).substring(2);
  let c = Math.random().toString(36).substring(2);
  let uniqueStringOfRandomCharacters = a + b + c;
  return uniqueStringOfRandomCharacters;
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
    };
  }

  componentDidMount() {

    // Create an array of 1,000,000 todos
    let oneMillionTodos = [];
    for (var i = 0; i < 1000000; i++) {
      const nextTodo = {
        id: randomStr(),
        task: randomStr(),
      };
      oneMillionTodos.push(nextTodo);
    }

    // Update the Redux Store with 1,000,000 todos
    this.props.addOneMillionTodos(oneMillionTodos);
  }

  render() {
    if (this.props.todos.loading) {
      return(
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator />
      </SafeAreaView>
      );
    }

    return (
      <SafeAreaView  style={{flex: 1, justifyContent: 'center'}}>
        <Text>One Million Todos Loaded!</Text>
      </SafeAreaView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOneMillionTodos: (payload) => dispatch({type: 'ADD_ONE_MILLION_TODOS', payload: payload}),
  };
};
const mapStateToProps = (state) => {
  return { 
    todos: state.todos,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);