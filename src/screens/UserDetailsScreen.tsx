// src/screens/UserDetailsScreen.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Importar a tipagem do Redux

type UserDetailsScreenNavigationProp = StackNavigationProp<any, 'UserDetails'>;

interface Props {
    navigation: UserDetailsScreenNavigationProp; // Tipando o navigation
}

const UserDetailsScreen: React.FC<Props> = ({ navigation }) => {
  // Acessando os dados do usuário armazenados no Redux
  const user = useSelector((state: RootState) => state.user.details);

  if (!user) {
    return (
      <View style={styles.container}>\
        <Text>Usuário não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: user.avatar_url }} style={styles.avatar} />
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.bio}>{user.bio}</Text>
      <Text>Seguidores: {user.followers}</Text>
      <Text>Seguindo: {user.following}</Text>
      <Text>Email: {user.email ?? "email não informado"}</Text>
      <Button
        title="Ver repositórios"
        onPress={() => navigation.navigate('RepositoryList')}
      />
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default UserDetailsScreen;
