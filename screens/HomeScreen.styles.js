import { StyleSheet } from 'react-native';

export default StyleSheet.create({
		container: {
		paddingBottom: 20,
		flex: 1,
		paddingHorizontal: 10,
	},
	page: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		marginTop: 10,
	},
	searchContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 10,
		gap: 10,
	},
	searchInput: {
		flex: 1,
		borderWidth: 1,
		borderColor: '#ccc',
		borderRadius: 8,
		padding: 8,
		marginRight: 8,
		backgroundColor: '#fff',
	},
	pagination: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 10,
	},
});
