import React, { useState } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import useResults from '../hooks/useApiResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'|| '$$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList results={filterResultsByPrice('$')} title='Cost Effective - $' />
        <ResultsList results={filterResultsByPrice('$$')} title='Pricey - $$' />
        <ResultsList results={filterResultsByPrice('$$$')} title='Bit Pricier - $$$' />
        <ResultsList results={filterResultsByPrice('$$$$')} title='Big Spender - $$$$' />
      </ScrollView>
    </>
  );
};

SearchScreen.navigationOptions = () => {
  return {
    title: 'Food Search'
  };
};

const styles = StyleSheet.create({
  // style
});

export default SearchScreen;
