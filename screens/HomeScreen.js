import React, { useEffect, useState } from 'react';
import {View,Text,Alert} from 'react-native';
import { getPokemons, getPokemonDetails } from '../services/api';
import PokemonCard from '../components/PokemonCard';
import styles from './HomeScreen.styles';
import Loader from '../components/ Loader';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import PokemonList from '../components/PokemonList';

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
			<SearchBar searchText={searchText} setSearchText={setSearchText} onSearch={handleSearch} onClear={handleClearSearch} isSearching={isSearching} />
			{loading ? (
				<Loader />
			) : pokemonList.length === 0 ? (
				<Text style={styles.noResults}>No se encontraron Pokémon</Text>
			) : (
				<PokemonList data={pokemonList} onPressItem={(item) => navigation.navigate('Details', { pokemon: item })} />
			)}

			{/* Controles de página (solo si no estamos en búsqueda) */}
			{!isSearching && (
				<Pagination page={page} maxPages={MAX_PAGES} onNext={nextPage} onPrev={prevPage} />
			)}
		</View>
	);
}

