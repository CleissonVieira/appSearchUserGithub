import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#888',
    marginBottom: 10,
  },
  bio: {
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  footer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderTopColor: '#ddd',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
  },
  divider: {
    width: 1.5,
    height: '100%',
    backgroundColor: '#ddd',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  nameSave: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
