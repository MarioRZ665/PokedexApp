import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import styles from './DetailScreen.styles'; // ← Importa los estilos separados

export default function DetailScreen({ route }) {
	const { pokemon } = route.params;
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<View style={styles.card}>
				<Image
					source={{ uri: pokemon.sprites.front_default }}
					style={styles.image}
				/>
				<Text style={styles.name}>{pokemon.name}</Text>

				<Text style={styles.label}>Tipo:</Text>
				<Text style={styles.value}>{pokemon.types.map(t => t.type.name).join(', ')}</Text>

				<Text style={styles.label}>Altura:</Text>
				<Text style={styles.value}>{pokemon.height}</Text>

				<Text style={styles.label}>Peso:</Text>
				<Text style={styles.value}>{pokemon.weight}</Text>

				<Text style={styles.label}>Experiencia Base:</Text>
				<Text style={styles.value}>{pokemon.base_experience}</Text>
			</View>
		</ScrollView>
	);
}
