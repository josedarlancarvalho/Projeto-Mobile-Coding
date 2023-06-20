import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FilmesScreen = () => {
  const [filme, setFilme] = useState('');
  const [filmesList, setFilmesList] = useState([]);

  const adicionarFilme = () => {
    if (filme.trim() === '') {
      return;
    }

    setFilmesList([...filmesList, filme]);
    setFilme('');
  };

  const removerFilme = (index) => {
    const novaLista = [...filmesList];
    novaLista.splice(index, 1);
    setFilmesList(novaLista);
  };

  const renderFilme = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item}</Text>
      <TouchableOpacity onPress={() => removerFilme(index)} style={styles.iconContainer}>
        <MaterialIcons name="delete" size={24} color="#16247d" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filmes</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do filme"
          placeholderTextColor="#666"
          value={filme}
          onChangeText={text => setFilme(text)}
        />
        <Button title="Adicionar" onPress={adicionarFilme} color="#16247d" />
      </View>
      <FlatList
        data={filmesList}
        renderItem={renderFilme}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#16247d',
    textAlign: 'center',
    paddingTop: 200,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    marginRight: 8,
    padding: 8,
    color: '#333',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  item: {
    flex: 1,
    fontSize: 18,
    color: '#333',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#16247d',
  },
  iconContainer: {
    padding: 8,
  },
});

export default FilmesScreen;