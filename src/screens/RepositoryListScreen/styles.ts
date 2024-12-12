import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sortContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  sortButtonText: {
    color: '#333',
  },
  highlightedText: {
    color: '#007BFF',
  },
  rotate180: {
    transform: [{ rotate: '180deg' }],
  },
  repoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    height: 120,
  },
  repoImage: {
    width: 80,
    height: 85,
    marginRight: 15,
  },
  repoInfo: {
    flex: 1,
  },
  repoHeader: {
    height: 65,
  },
  repoName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  repoDescription: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  repoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  repoDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  repoDetailsIcon: {
    flexDirection: 'row',
    gap: 1,
  },
  language: {
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  detailText: {
    fontSize: 14,
    marginHorizontal: 5,
  },
});

export default styles;
