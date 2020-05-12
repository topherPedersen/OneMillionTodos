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

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  // testing....

  render() {
    return(
      <SafeAreaView style={{flex: 100}}>

        <View style={{flex: 15, backgroundColor: 'pink', justifyContent: 'center'}}>
          <Text style={{textAlign: 'center'}}>Ten Thousand Todos...</Text>
        </View>

        <View style={{flex: 85, justifyContent: 'center', backgroundColor: 'purple'}}>
          <ActivityIndicator />
        </View>

      </SafeAreaView>
    );
  }
}

export default App;
