import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { setUserDetails, setUserName } from '../redux/slices/userSlice'; // Ação para definir o usuário
import { fetchUser } from '../services/githubApi';

type HomeScreenNavigationProp = StackNavigationProp<any, 'Home'>;

interface Props {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();

  // Função que irá buscar o usuário no GitHub e salvar no Redux
  const handleSearch = async () => {
    if (username) {
      try {
        const userData = await fetchUser(username);
        dispatch(setUserName(username)); // Armazena o usuário no Redux
        dispatch(setUserDetails(userData)); // Armazena o usuário no Redux

        navigation.navigate('UserDetails');
      } catch (error) {
        alert('Erro ao buscar usuário');
      }
    } else {
      alert('Digite um nome de usuário');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Find a dev</Text>
      <TextInput
        style={styles.input}
        placeholder="Search a dev"
        value={username}
        onChangeText={setUsername}
      />
      <Button title="Find" onPress={handleSearch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default HomeScreen;
