// src/screens/RepositoryDetailsScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { setRepositoryDetails } from '../redux/slices/repositorySlice'; // Ação para atualizar os repositórios
import { fetchRepository } from '../services/githubApi'; // Função de serviço para buscar repositórios

interface Props {
  route: any;
}

const RepositoryDetailsScreen: React.FC<Props> = ({ route }) => {
  const { full_name } = route.params; // Obtendo os parâmetros passados
  const repository = useSelector((state: RootState) => state.repository.details);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  // Função para buscar repositórios
  const getRepository = async () => {
    if (full_name) {
      setLoading(true);
      try {
        const repository = await fetchRepository(full_name);
        dispatch(setRepositoryDetails(repository)); // Atualizando o Redux com os repositórios
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.error(`Erro ao buscar repositório ${full_name}:`, error);
      }
    }
  };

  useEffect(() => {
    if (full_name) {
      getRepository(); // Busca os repositórios assim que o nome de usuário estiver disponível
    }
  }, [full_name]);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text>Nome: {repository?.name}</Text>
      <Text>Descrição: {repository?.description}</Text>
      <Text>Número de estrelas: {repository?.stargazers_count}</Text>
      <Text>Linguagem: {repository?.language}</Text>
      <Text>Link: {repository?.html_url}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RepositoryDetailsScreen;
