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

import Todo from './Todo';

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      bigTodoList: [],
    };
  }

  componentDidMount() {
    // Initialize Todo List
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
  }

  render() {

    if (this.state.loading) {
      return(
        <SafeAreaView style={{flex: 100}}>

          <View style={{flex: 15, backgroundColor: 'white', justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>Ten Thousand Todos...</Text>
          </View>

          <View style={{flex: 85, justifyContent: 'center', backgroundColor: 'white'}}>
            <ActivityIndicator />
          </View>

        </SafeAreaView>
      );
    }

    // If application has finished loading, render the bigTodoList:
    return(
      <SafeAreaView style={{flex: 100}}>

        <View style={{flex: 15, backgroundColor: 'white', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Ten Thousand Todos...</Text>
        </View>

        <View style={{flex: 85, justifyContent: 'center', backgroundColor: 'white'}}>
          <FlatList
            key="big-todo-list-key"
            data={this.state.bigTodoList}
            renderItem={({ item }) => (
              <Todo 
                todo={item} 
                completed={false} />
            )}
            keyExtractor={ (item, index) => item.toString() }/>
        </View>

      </SafeAreaView>
    );
  }
}

export default App;
