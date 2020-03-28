import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SearchBar from '../components/searchbar';
import yelp from '../api/yelp';

const SearchScreen = ()=> {
  const [term, setTerm]= useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setError]= useState('')

  const searchApi=async()=>{
    try {
      setError('')
      const res = await yelp.get('/search',{
        params:{
          limit:20,
          term,
          location:'NYC'
        }
      });
      setResults(res.data.businesses);
    } catch (error) {
      setError('Something went wrong');
    }
  }


  return (
    <View style={styles.container}>
      <SearchBar 
        term={term} 
        onChangeTerm={(text)=>setTerm(text)}
        onTermSubmitted={()=>searchApi()}
      />
      <Text>Search Term: {term}</Text>
      {errorMessage ? <Text style={styles.errorStyle}>{errorMessage}</Text> : null}
      <Text>We found {results.length} results</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height:'100%',
    padding:10
  },
  errorStyle:{
    color:'red'
  }
});

export default SearchScreen;