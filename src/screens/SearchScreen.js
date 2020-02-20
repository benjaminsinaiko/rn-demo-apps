import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useResults from '../hooks/useApiResults';

import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Text>We have found {results.length} results</Text>

      <ResultsList results={filterResultsByPrice('$')} title='Cost Effective' />
      <ResultsList results={filterResultsByPrice('$$')} title='Pricey' />
      <ResultsList results={filterResultsByPrice('$$$')} title='Bit Pricier' />
      <ResultsList results={filterResultsByPrice('$$$$')} title='Big Spender' />
    </View>
  );
};

const styles = StyleSheet.create({
  // style
});

export default SearchScreen;
