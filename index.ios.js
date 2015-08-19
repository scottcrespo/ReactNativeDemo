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
  Navigator,
  TouchableHighlight
} = React;

class ReactNativeDemo extends React.Component {
  constructor() {
    super();
    this.handlePressMessage = this.handlePressMessage.bind(this);
    this.state = { message : "Initial Message", messagenum : 0,
    };
  }

  handlePressMessage(msg) {
    if (this.state.messagenum === 0) {
      this.setState({message : msg, messagenum: 1});
    }
    else {
      this.setState({message: "Inital Message", messagenum: 0});
    }
  }

  render() {
    return (
      <View style={styles.container} >
        <Text style={styles.lrgtxt}>
          Master Text
        </Text>
        <Child1
          message={this.state.message}
          onUserInput={this.handlePressMessage}
        />
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
        <Child2
          message={this.props.message}
          onUserInput={this.props.onUserInput}
        />
      </View>
    );
  }
}

class Child2 extends React.Component {
  handleChange() {
    var msg = "New Message!";
    this.props.onUserInput(msg);
  }
  render() {
    return(
      <View>
        <Text style={styles.lrgtxt}>
          Child2 Text
        </Text>
        <Text>
          Message: {this.props.message}
        </Text>
        <TouchableHighlight onPress={this.handleChange.bind(this)}>
          <Text style={{fontWeight:'bold',}}>
            Click to change message
          </Text>
        </TouchableHighlight>
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
