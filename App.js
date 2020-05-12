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

import Todo from './Todo';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      bigTodoList: [],
    };
  }

  componentDidMount() {
    // Initialize Todo List!
    /*
    let bigTodoList = [];
    for (var i = 0; i < 10000; i++) {
      const nextTodo = Math.random().toString();
      bigTodoList.push(nextTodo);
    }
    const loadedState = {
      loading: false,
      bigTodoList: bigTodoList,
    };
    this.setState(loadedState);
    */
  }

  render() {

    if (this.state.loading) {
      return(
        <SafeAreaView style={{flex: 100}}>

          <View style={{flex: 15, backgroundColor: 'white', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>Ten Thousand Todos...</Text>
            <Todo todo="foo" />
          </View>

          <View style={{flex: 85, justifyContent: 'center', backgroundColor: 'white'}}>
            <ActivityIndicator />
          </View>

        </SafeAreaView>
      );
    }

    // TODO: Write return() method for loaded state...
  }
}

export default App;
