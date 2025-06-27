import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  card: {
    alignItems: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 10,
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 5,
    fontWeight: 'bold',
    textTransform: 'capitalize'
  }
});
