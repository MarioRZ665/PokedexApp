// components/SearchBar.js
import React from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from './SearchBar.styles';

export default function SearchBar({ searchText, setSearchText, onSearch, onClear, isSearching }) {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        placeholder="Buscar Pokémon por nombre"
        value={searchText}
        onChangeText={setSearchText}
        style={styles.searchInput}
      />
      <Button title="Buscar" onPress={onSearch} />
      {isSearching && <Button title="Limpiar" onPress={onClear} />}
    </View>
  );
}
