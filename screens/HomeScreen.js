import React, { useEffect, useState } from 'react';
import {View,FlatList,ActivityIndicator,Button,Text,StyleSheet,TextInput,Alert} from 'react-native';
import { getPokemons, getPokemonDetails } from '../services/api';
import PokemonCard from '../components/PokemonCard';
import styles from './HomeScreen.styles';
const LIMIT = 20;
const MAX_PAGES = 1000;
export default function HomeScreen({ navigation }) {
	const [pokemonList, setPokemonList] = useState([]);
	const [loading, setLoading] = useState(false);
	const [page, setPage] = useState(1);
	const [searchText, setSearchText] = useState('');
	const [isSearching, setIsSearching] = useState(false); // Estado para saber si hay búsqueda activa
	useEffect(() => {
		if (!isSearching) {
			loadPokemons();
		}
	}, [page]);

	const loadPokemons = async () => {
		setLoading(true);
		const offset = (page - 1) * LIMIT;

		try {
			const data = await getPokemons(LIMIT, offset);
			const detailed = await Promise.all(data.results.map((p) => getPokemonDetails(p.url)));
			setPokemonList(detailed);
		} catch (error) {
			console.error('Error al cargar Pokémon:', error);
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = async () => {
		if (!searchText.trim()) return;

		setLoading(true);
		setIsSearching(true);

		try {
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${searchText.toLowerCase()}`
			);
			if (!response.ok) throw new Error('No encontrado');

			const data = await response.json();
			setPokemonList([data]); // Mostrar solo el resultado
		} catch (error) {
			Alert.alert('Error', 'Pokémon no encontrado');
		} finally {
			setLoading(false);
		}
	};

	const handleClearSearch = () => {
		setSearchText('');
		setIsSearching(false);
		setPage(1);
		loadPokemons();
	};

	const nextPage = () => {
		if (!isSearching && page < MAX_PAGES) setPage(page + 1);
	};

	const prevPage = () => {
		if (!isSearching && page > 1) setPage(page - 1);
	};

	return (
		<View style={styles.container}>
			<View style={styles.searchContainer}>
				<TextInput
					placeholder="Buscar Pokémon por nombre"
					value={searchText}
					onChangeText={setSearchText}
					style={styles.searchInput}
				/>
				<Button title="Buscar" onPress={handleSearch} />
				{isSearching && <Button title="Limpiar" onPress={handleClearSearch} />}
			</View>

			{loading ? (
				<ActivityIndicator size="large" />
			) : (
				<FlatList
					data={pokemonList}
					keyExtractor={(item) => item.id.toString()}
					numColumns={2}
					renderItem={({ item }) => (
						<PokemonCard
							pokemon={item}
							onPress={() => navigation.navigate('Details', { pokemon: item })}
						/>
					)}
				/>
			)}

			{/* Controles de página (solo si no estamos en búsqueda) */}
			{!isSearching && (
				<View style={styles.pagination}>
					<Button title="Anterior" onPress={prevPage} disabled={page === 1} />
					<Button title="Siguiente" onPress={nextPage} disabled={page === MAX_PAGES} />
				</View>
			)}
		</View>
	);
}

