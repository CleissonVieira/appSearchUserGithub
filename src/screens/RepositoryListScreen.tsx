// src/screens/RepositoryListScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Button, ActivityIndicator } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setRepositories, setOrder } from '../redux/slices/repositoriesSlice'; // Ação para atualizar os repositórios
import { fetchRepositories } from '../services/githubApi'; // Função de serviço para buscar repositórios

type RepositoryListScreenNavigationProp = StackNavigationProp<any, 'RepositoryList'>;

interface Props {
    navigation: RepositoryListScreenNavigationProp; // Tipando o navigation
}

const RepositoryListScreen: React.FC<Props> = ({ navigation }: any) => {
  // Usando Redux para acessar o nome de usuário e os repositórios
  const { username } = useSelector((state: RootState) => state.user);
  const repositories = useSelector((state: RootState) => state.repositories);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  // Função para buscar repositórios
  const getRepositories = async () => {
    if (username) {
      setLoading(true);
      try {
        const repositoryList = await fetchRepositories(username);
        dispatch(setRepositories(repositoryList)); // Atualizando o Redux com os repositórios
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error('Erro ao buscar repositórios:', error);
      }
    }
  };

  useEffect(() => {
    if (username) {
      getRepositories(); // Busca os repositórios assim que o nome de usuário estiver disponível
    }
  }, [username]);

  const handleSortChange = (order: 'asc' | 'desc') => {
    dispatch(setOrder(order)); // Atualiza a ordem
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Repositórios de {username}</Text>

      <Picker
        selectedValue={repositories.order}
        style={styles.picker}
        onValueChange={handleSortChange}
      >
        <Picker.Item label="Ordenar por Estrelas: Ascendente" value="asc" />
        <Picker.Item label="Ordenar por Estrelas: Descendente" value="desc" />
      </Picker>

      <FlatList
        data={repositories.list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.repoContainer}>
            <Text style={styles.repoName}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Estrelas: {item.stargazers_count}</Text>
            <Button
              title="Ver detalhes"
              onPress={() =>
                navigation.navigate('RepositoryDetails', {
                    full_name: item.full_name,
                })
              }
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  repoContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  repoName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  picker: {
    height: 180,
    width: 200,
    marginBottom: 20,
  },
});

export default RepositoryListScreen;
