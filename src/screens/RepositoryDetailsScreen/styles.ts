import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 40,
  },
  header: {
    marginBottom: 20,
  },
  repoName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  repoFullName: {
    fontSize: 18,
    color: '#555',
  },
  description: {
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  rotate180: {
    transform: [{ rotate: '180deg' }],
  },
  statsBox: {
    alignItems: 'center',
  },
  statsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 14,
    color: '#555',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    color: '#333',
  },
  detailValue: {
    fontSize: 16,
    color: '#555',
  },
  openButton: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  openButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    width: '100%',
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderTopColor: '#ddd',
  },
});

export default styles;
