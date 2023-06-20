import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>Meus Filmes</Text>
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo ao Meus Filmes. Seu lugar para adicionar filmes</Text>
        <Text style={styles.subtitle}>Clique na aba "FILMES" e adicione o que preferir.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: '#F5F5F5',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#16247d',
    textAlign: 'center',
    marginBottom: 16,
    paddingTop: 50
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#16247d',
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#333',
    textAlign: 'center',
  },
});

export default Home;