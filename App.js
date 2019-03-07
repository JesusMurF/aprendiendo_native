/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View, Button, Alert, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Text } from "react-native";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => {
          Alert.alert('Button');
          }}
          title="Button"
        />
        <TouchableHighlight style={styles.touchableHighlight} underlayColor={'grey'} onPress={() => Alert.alert('Touchable highlight')}>
          <Text>My touchable highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => Alert.alert('Touchable highlight')}>
          <Text>Touchable opacity</Text>
        </TouchableOpacity>
        {/* Este es el boton que menos se usa */}
        <TouchableWithoutFeedback onPress={() => Alert.alert('Touchable without feedback')}>
          <Text>Touchable without feedback</Text>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontSize: 20
  },
  touchableHighlight: {
    backgroundColor: 'moccasin',
    borderRadius: 50,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10
  },
  touchableOpacity: {
    backgroundColor: 'deepskyblue',
    borderRadius: 50,
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10
  }
});
