// components/PokemonList.js
import React from 'react';
import { FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList({ data, onPressItem }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <PokemonCard pokemon={item} onPress={() => onPressItem(item)} />
      )}
    />
  );
}
