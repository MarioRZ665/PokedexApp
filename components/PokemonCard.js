import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import styles from './PokemonCard.styles'; // ← Importa los estilos separados



export default function PokemonCard({ pokemon, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
    </TouchableOpacity>
  );
}