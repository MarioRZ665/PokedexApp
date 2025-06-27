// components/Pagination.js
import React from 'react';
import { View, Button } from 'react-native';
import styles from './Pagination.styles';

export default function Pagination({ page, maxPages, onNext, onPrev }) {
  return (
    <View style={styles.container}>
      <Button title="Anterior" onPress={onPrev} disabled={page === 1} />
      <Button title="Siguiente" onPress={onNext} disabled={page === maxPages} />
    </View>
  );
}
