import React, {} from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onChangeTerm, onTermSubmitted})=> {
  const {container, text} = styles;
  return (
    <View style={container}>
      <Feather name="search" size={30} /> 
      <TextInput 
        autoCapitalize="none"
        placeholder="Search"
        style={text}
        onChangeText={text => onChangeTerm(text)}
        value={term}
        onEndEditing={()=>onTermSubmitted()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: '#EEEEEE',
    height:'10%',
    borderRadius:60,
    marginTop:15,
    marginRight:15,
    marginLeft:15,
    padding:10
  },
  text:{
    fontSize:16,
    marginLeft:10
  }
});

export default SearchBar;