/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

class ReactNativeDemo extends React.Component {
  render() {
    let message = "Child2 Message";
    return (
      <View style={styles.container} >
        <Text style={styles.lrgtxt}>
          Master Text
        </Text>
        <Child1 message={message}  />
      </View>
    );
  }
}

class Child1 extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.lrgtxt}>
          Child1 Text
        </Text>
        <Child2 message={this.props.message}/>
      </View>
    );
  }
}

class Child2 extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.lrgtxt}>
          Child2 Text
        </Text>
        <Text>
          {this.props.message}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  lrgtxt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);
