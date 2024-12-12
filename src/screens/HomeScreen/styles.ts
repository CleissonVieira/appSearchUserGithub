import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 80,
    marginBottom: 20,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 40,
    backgroundColor: '#ccc',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
  },
  titleOpacity: {
    opacity: 0.4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f3f3f3',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
});

export default styles;
