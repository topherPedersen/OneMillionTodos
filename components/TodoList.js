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

// Import Components
import TodoItem from './TodoItem';

// Import React-Redux
import { 
  connect, 
  Provider 
} from 'react-redux';

function randomStr() {
  let a = Math.random().toString(36).substring(2);
  let b = Math.random().toString(36).substring(2);
  let uniqueStringOfRandomCharacters = a + b;
  return uniqueStringOfRandomCharacters;
}

// IMPORTANT! Use React.PureComponent instead of React.Component
// Make sure to explain this in tutorial.
class TodoList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      todosArray: [],
    };
  }

  componentDidMount() {

    // ----------------------------------------------
    // *** IMPORTANT *** 
    // ----------------------------------------------
    // (NOTE: EXPLAIN THIS IN THE TUTORIAL)
    // ----------------------------------------------
    // We need to wrap our expensive long running
    // action below in a setTimeout function to 
    // push the task to the back of the javascript
    // call stack. We do this to make sure our
    // loading spinner (ActivityIndicator) displays.
    // If we do not do this little trick, the screen
    // will simply display a white blank screen while
    // we generate our 1,000,000 todo items.
    // ----------------------------------------------

    // ----------------------------------------------
    // *** IMPORTANT *** 
    // ----------------------------------------------
    // (NOTE: EXPLAIN THIS IN THE TUTORIAL)
    // ----------------------------------------------
    // Sidenote, we need to declare constants for anything
    // involving 'this' that we wish to run inside our setTimeout.
    // If we do not do this, the function will not know which
    // 'this' we are talking about and our app will crash.
    // ----------------------------------------------
    const addOneMillionTodos = (todos) => this.props.addOneMillionTodos(todos);
    const setState = (state) => this.setState(state);
    setTimeout( () => {
      // Create an array of 1,000,000 todos
      let oneMillionTodos = []; // Associative Array
      let oneMillionTodosArray = []; // Numerically Indexed Array
      for (var i = 0; i < 1000000; i++) {
        const nextTodo = {
          id: randomStr(),
          task: randomStr(),
          completed: false,
        };
        oneMillionTodos[nextTodo.id] = nextTodo;
        oneMillionTodosArray.push(nextTodo);
      }

      // Update Local State with 1,000,000 todos
      setState({todosArray: oneMillionTodosArray});

      // Update the Redux Store with 1,000,000 todos
      addOneMillionTodos(oneMillionTodos);
    }, 0);
  }

  // NOTE: This method will add the todo to the TOP of the TODO list...
  addNewTodo() {
    const oldTodoList = this.props.todos.item; // Associative Array
    const newTodo = {
      id: "NewID-" + Math.random().toString(36).substring(2),
      task: "NewTODO-" + Math.random().toString(36).substring(2),
      completed: false,
    };
    let oneMillionPlusTodos = [];
    oneMillionPlusTodos = oldTodoList;
    oneMillionPlusTodos[newTodo.id] = newTodo;
    let oneMillionPlusTodosArray = [];
    oneMillionPlusTodosArray[0] = newTodo;
    // Loop through oldTodoList associative array, and append
    // oldTodoList items to the new todo list array
    for (var key in oldTodoList) {
      oneMillionPlusTodosArray.push(oldTodoList[key]);
    }

    // Update the UI to display the new TODO item
    // (should be displayed at the TOP of the todo list)
    this.setState({todosArray: oneMillionPlusTodosArray,});

    // ADD_ONE_TODO to Redux Store
    const addOneTodo = (todo) => this.props.addOneTodo(todo);
    setTimeout( () => {
      addOneTodo(newTodo);
      //alert("addNewTodo complete?");
    }, 0);
  }

  render() {
    if (this.props.todos.loading) {
      return(
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator />
        <Text style={{textAlign: 'center'}}>Loading one million todos...</Text>
      </SafeAreaView>
      );
    }

    return (
      <SafeAreaView style={{flex: 100}}>

        <View style={{flex: 15, backgroundColor: 'white', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>One Million Todos</Text>
          <Button 
            title="Add New Todo"
            onPress={ () => this.addNewTodo() } />
        </View>

        <View style={{flex: 85, justifyContent: 'center', backgroundColor: 'white'}}>
          <FlatList
            key="big-todo-list-key"
            data={this.state.todosArray}
            renderItem={({ item }) => (
              <TodoItem 
                id={item.id}
                completed={item.completed}
                task={item.task} />
            )}
            keyExtractor={ (item, index) => item.id }/>
        </View>

      </SafeAreaView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addOneMillionTodos: (payload) => dispatch({type: 'ADD_ONE_MILLION_TODOS', payload: payload}),
    addOneTodo: (payload) => dispatch({type: 'ADD_ONE_TODO', payload: payload}),
  };
};
const mapStateToProps = (state) => {
  return { 
    todos: state.todos,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);