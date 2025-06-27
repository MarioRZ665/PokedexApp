import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	 container: {
		  flexGrow: 1,
		  padding: 20,
		  justifyContent: 'center',
		  alignItems: 'center',
		  backgroundColor: '#f2f2f2',
	 },
	 card: {
		  backgroundColor: '#fff',
		  borderRadius: 16,
		  padding: 20,
		  width: '100%',
		  maxWidth: 400,
		  alignItems: 'center',
		  shadowColor: '#000',
		  shadowOpacity: 0.2,
		  shadowRadius: 8,
		  shadowOffset: { width: 0, height: 4 },
		  elevation: 5,
	 },
	 image: {
		  width: 150,
		  height: 150,
		  marginBottom: 20,
	 },
	 name: {
		  fontSize: 26,
		  fontWeight: 'bold',
		  marginBottom: 15,
		  textTransform: 'capitalize',
	 },
	 label: {
		  fontSize: 16,
		  fontWeight: '600',
		  marginTop: 10,
	 },
	 value: {
		  fontSize: 16,
		  color: '#333',
	 },
});
