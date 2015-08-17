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
    return (
      <Navigator
        initialRoute={{name: 'Welcome', component: Welcome}}
        configureScene={() => {
            return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={(route, navigator) => {
            if (route.component) {
                return React.createElement(route.component, { navigator });
            }
        }}
      />
    );
  }
}

class Welcome extends React.Component {

  onPressList() {
      this.props.navigator.push({
          name: 'TheList',
          component: TheList
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome Screen
        </Text>
        <Text onPress={this.onPressList.bind(this)}>
          Go to List!
        </Text>
      </View>
    )
  }
}

class TheList extends React.Component {

  onPressWelcome() {
      this.props.navigator.push({
          name: 'Welcome',
          component: Welcome
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          The List
        </Text>
        <Text onPress={this.onPressWelcome.bind(this)}>
          Go to Welcome!
        </Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
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
