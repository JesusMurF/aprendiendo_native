/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, FlatList, ActivityIndicator } from "react-native";

export default class App extends Component {
  state = {
    //Assing a array to your pokeList state
    pokeList: [],
    //Have a loading state where when data retrieve returns data. 
    loading: true
}

  async componentDidMount() {
    //Have a try and catch block for catching errors.
    try {
        //Assign the promise unresolved first then get the data using the json method. 
        const pokemonApiCall = await fetch('https://pokeapi.co/api/v2/pokemon/');
        const pokemon = await pokemonApiCall.json();
        this.setState({pokeList: pokemon.results, loading: false});
    } catch(err) {
        console.log("Error fetching data-----------", err);
    }
}

renderItem(data) {
  return <TouchableOpacity style={{backgroundColor: 'transparent'}}>
              <View  style={styles.listItemContainer}>
                  <Text style={styles.pokeItemHeader}>{data.item.name}</Text>
                  <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                          style={styles.pokeImage}/>
              </View>
          </TouchableOpacity>
}
render() {
  //Destruct pokeList and Loading from state.
  const { pokeList, loading } = this.state;
  //If laoding to false, return a FlatList which will have data, rednerItem, and keyExtractor props used.
  //Data contains the data being  mapped over.
  //RenderItem a callback return UI for each item.
  //keyExtractor used for giving a unique identifier for each item.
  if(!loading) {
      return <FlatList 
              data={pokeList}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.name} 
              />
  } else {
      return <ActivityIndicator />
  }
}

}

const styles = StyleSheet.create({
  listItemContainer: {
      backgroundColor: 'white',
      borderStyle: 'solid',
      borderColor: '#000',
      borderBottomWidth: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20
  },
  pokeItemHeader: {  
      color: '#000',
      fontSize: 24,
  },
  pokeImage: {
      backgroundColor: 'transparent',
      height: 50,
      width: 50
  }
})